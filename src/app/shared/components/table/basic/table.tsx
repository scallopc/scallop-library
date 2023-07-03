import { Container, DataCell, HeaderCell, Image } from "../styles";
import { TableProps } from "../table.model";

export function Table({ value, children }: TableProps) {
     return (
          <Container>
               <thead>
                    <tr>
                         {children.map((column) => (
                              <HeaderCell key={column.props.field}>
                                   {column.props.header}
                              </HeaderCell>
                         ))}
                    </tr>
               </thead>
               <tbody>
                    {value.map((row, rowIndex) => (
                         <tr key={rowIndex}>
                              {children.map((column, colIndex) => (
                                   <DataCell key={colIndex}>
                                        {row[column.props.field]}
                                   </DataCell>
                              ))}
                         </tr>
                    ))}
               </tbody>
          </Container>
     );
}
