import React, { useState } from "react";
import { ColumnProps, TreeNode, TreeTableProps } from "../table.model";
import {
     Container,
     DataCell,
     HeaderCell,
     IconExpander,
     IndentedCell,
} from "../styles";

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
               <React.Fragment key={node.key}>
                    <tr>
                         {columns.map((column, index) => {
                              const { field, expander, body } = column.props;
                              const fieldValue = field
                                   ? node.data[field]
                                   : null;

                              return (
                                   <React.Fragment key={index}>
                                        {index === 0 ? (
                                             <IndentedCell
                                                  indentLevel={indentLevel}
                                             >
                                                  {expander &&
                                                       node.children && (
                                                            <IconExpander>
                                                                 <i
                                                                      onClick={() =>
                                                                           toggleNode(
                                                                                node
                                                                                     .data
                                                                                     .id
                                                                           )
                                                                      }
                                                                      className={
                                                                           expandedNodes.includes(
                                                                                node
                                                                                     .data
                                                                                     .id
                                                                           )
                                                                                ? "fa-solid fa-chevron-down"
                                                                                : "fa-solid fa-chevron-right"
                                                                      }
                                                                 />
                                                            </IconExpander>
                                                       )}
                                                  {body
                                                       ? body(node)
                                                       : fieldValue}
                                             </IndentedCell>
                                        ) : (
                                             <DataCell key={index}>
                                                  {body
                                                       ? body(node)
                                                       : fieldValue}
                                             </DataCell>
                                        )}
                                   </React.Fragment>
                              );
                         })}
                    </tr>
                    {expandedNodes.includes(node.data.id) &&
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
                              return (
                                   <HeaderCell key={index}>{header}</HeaderCell>
                              );
                         })}
                    </tr>
               </thead>
               <tbody>{renderTree(value, indentLevel)}</tbody>
          </Container>
     );
}
