import React, { useState } from "react";
import { TreeNode, TreeTableProps } from "../table.model";
import { Container, DataCell, IndentedCell } from "../styles";

export function TreeTable({
     value,
     children,
     indentLevel = 0,
}: TreeTableProps) {
     const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

     const toggleNode = (nodeId: number) => {
          if (expandedNodes.includes(nodeId)) {
               setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
          } else {
               setExpandedNodes([...expandedNodes, nodeId]);
          }
     };

     const renderTree = (nodes: TreeNode[], indentLevel: number) => {
          return nodes.map((node) => (
               <React.Fragment key={node.id}>
                    <tr>
                         {children.map((column, index) => {
                              const { field, expander } = column.props;
                              return (
                                   <React.Fragment key={field}>
                                        {index === 0 ? (
                                             <IndentedCell
                                                  indentLevel={indentLevel}
                                             >
                                                  {expander &&
                                                       node.children && (
                                                            <button
                                                                 onClick={() =>
                                                                      toggleNode(
                                                                           node.id
                                                                      )
                                                                 }
                                                            >
                                                                 {expandedNodes.includes(
                                                                      node.id
                                                                 )
                                                                      ? "-"
                                                                      : "+"}
                                                            </button>
                                                       )}
                                                  {node[field]}
                                             </IndentedCell>
                                        ) : (
                                             <DataCell key={field}>
                                                  {node[field]}
                                             </DataCell>
                                        )}
                                   </React.Fragment>
                              );
                         })}
                    </tr>
                    {expandedNodes.includes(node.id) &&
                         node.children &&
                         renderTree(node.children, indentLevel + 1)}
               </React.Fragment>
          ));
     };

     return (
          <Container>
               <thead>
                    <tr>
                         {children.map((column, index) => {
                              const { field, header } = column.props;
                              return <th key={field}>{header}</th>;
                         })}
                    </tr>
               </thead>
               <tbody>{renderTree(value, indentLevel)}</tbody>
          </Container>
     );
}
