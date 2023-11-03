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
     const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
          null
     );

     // Lógica para controlar a página atual e total de páginas
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = rows ?? 10;
     const totalRows = value?.length;
     const totalPages = Math.ceil(totalRows / pageSize);

     const handlePageChange = (page: number) => {
          setCurrentPage(page);
     };

     // Lógica para ordenar os dados por coluna
     const handleSortClick = (field: string) => {
          if (field === sortField) {
               setSortDirection((prevSortDirection) =>
                    prevSortDirection === "asc" ? "desc" : "asc"
               );
          } else {
               setSortField(field);
               setSortDirection("asc");
          }
     };

     // Função para ordenar os dados com base no campo e direção de ordenação
     const sortData = (
          data: TreeNode[],
          field: string | null,
          direction: "asc" | "desc"
     ) => {
          if (field) {
               return data.sort((a, b) => {
                    const valueA = a.data[field];
                    const valueB = b.data[field];
                    if (valueA < valueB) {
                         return direction === "asc" ? -1 : 1;
                    } else if (valueA > valueB) {
                         return direction === "asc" ? 1 : -1;
                    } else {
                         return 0;
                    }
               });
          } else {
               return data;
          }
     };

     // Lógica para paginar e ordenar os dados com base na página atual e campo de ordenação
     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = startIndex + pageSize;
     const sortedData = sortData(value, sortField, sortDirection);
     const paginatedData = sortedData?.slice(startIndex, endIndex);

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
                                                                                     ? "bi bi-chevron-down"
                                                                                     : "bi bi-chevron-right"
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
                                   sortDirection={sortDirection}
                                   onClick={() =>
                                        handleSortClick(column.props.field)
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
