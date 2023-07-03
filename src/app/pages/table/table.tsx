import {
     Container,
     Box,
     Components,
     Content,
     H5,
     DocumentationContainer,
     SmallDetail,
     Detail,
     TableRow,
     H2,
} from "../styles";
import { Table, Columns } from "../../shared/components";

import { useEffect, useState } from "react";
//   import users from "../service/users";

//   import axios from "axios";

export function TablePageView() {
     const [dataTable, setDataTable] = useState([]);

     // console.log(dataTable);
     // useEffect(() => {
     //   axios("https://jsonplaceholder.typicode.com/users")
     //     .then((res) => setDataTable(res.data))
     //     .catch((err) => console.log(err));
     // }, []);
     const columns = [
          { field: "code", header: "Code" },
          { field: "name", header: "Name" },
          { field: "category", header: "Category" },
          { field: "quantity", header: "Quantity" },
     ];

     const data = [
          {
               code: "001",
               name: "Product 1",
               category: "Category A",
               quantity: 10,
          },
          {
               code: "002",
               name: "Product 2",
               category: "Category B",
               quantity: 15,
          },
          {
               code: "003",
               name: "Product 3",
               category: "Category C",
               quantity: 20,
          },
     ];

     return (
          <Container>
               <H2>Table</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <Content>
                              <h3>Basic</h3>
                              <Detail></Detail>

                              <Table data={data}>
                                   {columns.map((col) => (
                                        <Columns
                                             key={col.field}
                                             field={col.field}
                                             header={col.header}
                                        />
                                   ))}
                              </Table>
                         </Content>
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
