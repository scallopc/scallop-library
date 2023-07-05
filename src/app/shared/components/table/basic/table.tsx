import React from "react";
import { Container, DataCell, HeaderCell, Image } from "../styles";
import { ColumnProps, TableProps } from "../table.model";
import { Column } from "../column/column";

export function Table({ value, children }: TableProps) {
     const columns = React.Children.toArray(children) as React.ReactElement<
          ColumnProps,
          string | ((props: any) => JSX.Element)
     >[];

     return (
          <Container>
               <thead>
                    <tr>
                         {columns.map((column, i) => (
                              <HeaderCell key={i}>
                                   {column.props.header}
                              </HeaderCell>
                         ))}
                    </tr>
               </thead>
               <tbody>
                    {value.map((row, rowIndex) => (
                         <tr key={rowIndex}>
                              {columns.map((column, colIndex) => (
                                   <DataCell key={colIndex}>
                                        {column.props.body
                                             ? column.props.body(row)
                                             : row[column.props.field]}
                                   </DataCell>
                              ))}
                         </tr>
                    ))}
               </tbody>
          </Container>
     );
}
