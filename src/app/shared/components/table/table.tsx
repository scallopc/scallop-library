import { Container, Image } from "./styles";
import TableHeader from "./tableHeader";
import TableRows from "./tableRows";

type ColumnProps = {
     field: string;
     header: string;
};

type TableProps = {
     data: Record<string, any>[];
     children: React.ReactElement<ColumnProps>[];
};

export function Table({ data, children }: TableProps) {
     return (
          <Container>
               <thead>
                    <tr>
                         {children.map((column) => (
                              <th key={column.props.field}>
                                   {column.props.header}
                              </th>
                         ))}
                    </tr>
               </thead>
               <tbody>
                    {data.map((row, rowIndex) => (
                         <tr key={rowIndex}>
                              {children.map((column, colIndex) => (
                                   <td key={colIndex}>
                                        {row[column.props.field]}
                                   </td>
                              ))}
                         </tr>
                    ))}
               </tbody>
          </Container>
     );
}
