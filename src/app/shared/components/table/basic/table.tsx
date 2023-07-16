import React, { useMemo, useState } from "react";
import { Container, DataCellTD, HeaderCell, Image } from "../styles";
import { ColumnProps, TableProps } from "../table.model";
import { Column } from "../column/column";
import { Paginator } from "../../paginator/paginator";

export function Table({ value, children, paginator, rows }: TableProps) {
     const columns = React.Children.toArray(children) as React.ReactElement<
          ColumnProps,
          string | ((props: any) => JSX.Element)
     >[];

     // Lógica para controlar a página atual e total de páginas
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = rows ?? 10;
     const totalRows = value?.length;
     const totalPages = Math.ceil(totalRows / pageSize);
     // Sort
     const [sortField, setSortField] = useState<string | null>(null);
     const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
          null
     );

     const handlePageChange = (page: number) => {
          setCurrentPage(page);
     };

     //sort
     const handleSort = (field: string) => {
          if (sortField === field) {
               setSortDirection((prevSortDirection) => {
                    if (prevSortDirection === "asc") {
                         return "desc";
                    } else {
                         return "asc";
                    }
               });
          } else {
               setSortField(field);
               setSortDirection("asc");
          }
     };

     const columnValue = (data: any, field: string) => {
          const fieldParts = field.split(".");
          let value = data;
          for (let i = 0; i < fieldParts.length; i++) {
               if (value) {
                    value = value[fieldParts[i]];
               } else {
                    break;
               }
          }
          return value;
     };

     const sortedAndPaginatedData = useMemo(() => {
          let data = value ?? [];
          // Ordenar os dados
          if (sortField) {
               data = [...data].sort((a, b) => {
                    const valueA = columnValue(a, sortField);
                    const valueB = columnValue(b, sortField);

                    if (
                         typeof valueA === "string" &&
                         typeof valueB === "string"
                    ) {
                         return valueA.localeCompare(valueB);
                    } else {
                         return valueA - valueB;
                    }
               });

               if (sortDirection === "desc") {
                    data.reverse();
               }
          }

          // Paginar os dados
          if (paginator) {
               const startIndex = (currentPage - 1) * pageSize;
               const endIndex = startIndex + pageSize;
               data = data.slice(startIndex, endIndex);
          }

          return data;
     }, [value, sortField, sortDirection, paginator, currentPage, pageSize]);

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
                                        handleSort(column.props.field)
                                   }
                              />
                         ))}
                    </tr>
               </thead>
               <tbody>
                    {sortedAndPaginatedData.map((row, rowIndex) => (
                         <tr key={rowIndex}>
                              {columns.map((column, colIndex) => (
                                   <DataCellTD key={colIndex}>
                                        <div className="flex align-items-center">
                                             {column.props.body
                                                  ? column.props.body(row)
                                                  : row[column.props.field]}
                                        </div>
                                   </DataCellTD>
                              ))}
                         </tr>
                    ))}
               </tbody>
               {sortedAndPaginatedData.length > 0 && paginator && (
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
