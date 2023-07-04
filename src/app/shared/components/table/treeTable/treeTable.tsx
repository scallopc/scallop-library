import React, { useState } from "react";
import { ColumnProps, TreeNode, TreeTableProps } from "../table.model";
import { Container, DataCell, IndentedCell } from "../styles";

export function TreeTable({
     value,
     children,
     indentLevel = 0,
}: TreeTableProps) {
     const columns = React.Children.toArray(children) as React.ReactElement<
          ColumnProps,
          string | ((props: any) => JSX.Element)
     >[];

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
                         {columns.map((column, index) => {
                              const { field, expander, body } = column.props;
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
                                                  {body
                                                       ? body(node)
                                                       : node[field]}
                                             </IndentedCell>
                                        ) : (
                                             <DataCell key={field}>
                                                  {body
                                                       ? body(node)
                                                       : node[field]}
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
                         {columns.map((column, index) => {
                              const { field, header } = column.props;
                              return <th key={field}>{header}</th>;
                         })}
                    </tr>
               </thead>
               <tbody>{renderTree(value, indentLevel)}</tbody>
          </Container>
     );
}
