import { useEffect, useState } from "react";
import { Table, Column, TreeTable } from "../../shared/components";
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

     const columnsTree = [
          { field: "name", header: "Name", expander: true },
          { field: "id", header: "ID" },
     ];

     const nodes = [
          {
               id: 1,
               name: "Node 1",
               children: [
                    {
                         id: 2,
                         name: "Node 1.1",
                    },
                    {
                         id: 3,
                         name: "Node 1.2",
                         children: [
                              {
                                   id: 4,
                                   name: "Node 1.2.1",
                              },
                         ],
                    },
               ],
          },
          {
               id: 5,
               name: "Node 2",
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

                              <Table value={data}>
                                   {columns.map((col) => (
                                        <Column
                                             key={col.field}
                                             field={col.field}
                                             header={col.header}
                                        />
                                   ))}
                              </Table>

                              <TreeTable value={nodes}>
                                   {columnsTree.map((col, i) => (
                                        <Column
                                             key={col.field}
                                             field={col.field}
                                             header={col.header}
                                             expander={col.expander}
                                        />
                                   ))}
                              </TreeTable>
                         </Content>
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
