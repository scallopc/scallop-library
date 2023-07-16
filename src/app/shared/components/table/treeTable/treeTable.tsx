import React, { useState } from "react";
import { ColumnProps, TreeNode, TreeTableProps } from "../table.model";
import { Container, DataCellTD, IconExpander, IndentedCell } from "../styles";
import { Paginator } from "../../paginator/paginator";
import { Column } from "../column/column";

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
     const [sortField, setSortField] = useState<string | null>(null);

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
                                                  <div className="flex align-items-center">
                                                       {expander &&
                                                            node.children && (
                                                                 <IconExpander
                                                                      onClick={() =>
                                                                           toggleNode(
                                                                                node
                                                                                     .data
                                                                                     .id
                                                                           )
                                                                      }
                                                                 >
                                                                      <i
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
                                                  </div>
                                             </IndentedCell>
                                        ) : (
                                             <DataCellTD key={index}>
                                                  {body
                                                       ? body(node)
                                                       : fieldValue}
                                             </DataCellTD>
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
                         {columns.map((column, i) => (
                              <Column
                                   key={i}
                                   field={column.props.field}
                                   header={column.props.header}
                                   sortable={column.props.sortable}
                                   sortField={sortField}
                                   onClick={() =>
                                        console.log(column.props.field)
                                   }
                              />
                         ))}
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
