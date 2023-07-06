import React, { useState } from "react";
import { ColumnProps, TreeNode, TreeTableProps } from "../table.model";
import {
     Container,
     DataCell,
     HeaderCell,
     IconExpander,
     IndentedCell,
} from "../styles";
import { Paginator } from "../../paginator/paginator";

export function TreeTable({
     value,
     children,
     indentLevel = 0,
     paginator,
     rows,
}: TreeTableProps) {
     const columns = React.Children.toArray(children) as React.ReactElement<
          ColumnProps,
          string | ((props: any) => JSX.Element)
     >[];
     const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

     // Lógica para controlar a página atual e total de páginas
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = rows ?? 10;
     const totalRows = value?.length;
     const totalPages = Math.ceil(totalRows / pageSize);

     const handlePageChange = (page: number) => {
          setCurrentPage(page);
     };
     // Lógica para paginar os dados com base na página atual
     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = startIndex + pageSize;
     const paginatedData = value?.slice(startIndex, endIndex);

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
               <tbody>{renderTree(paginatedData, indentLevel)}</tbody>
               {paginator && (
                    <tfoot>
                         <tr>
                              <td colSpan={columns.length}>
                                   <Paginator
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onChangePage={handlePageChange}
                                   />
                              </td>
                         </tr>
                    </tfoot>
               )}
          </Container>
     );
}
