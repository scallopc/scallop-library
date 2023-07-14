import { useEffect, useState } from "react";
import { Table, Column, TreeTable, Button } from "../../shared/components";
import {
     Container,
     Box,
     Content,
     H5,
     DocumentationContainer,
     Detail,
     H2,
} from "../styles";

import { getRandomUserService, NodesService } from "../../shared/service";

export function PageTable() {
     const [dataTable, setDataTable] = useState([]);
     const [dataTreeTable, setDataTreeTable] = useState([]);

     useEffect(() => {
          handleDataTable();
          handleDataTreeTable();
     }, []);

     const handleDataTable = () => {
          getRandomUserService()
               .then((res: any) => {
                    const data = res.data.results;
                    setDataTable(data);
               })
               .catch(() => {});
     };

     const handleDataTreeTable = () => {
          NodesService.getTreeTableNodes()
               .then((res: any) => {
                    setDataTreeTable(res);
               })
               .catch(() => {});
     };

     const handleColStatus = (col) => {
          return (
               <span className="flex gap-1 align-items-center">
                    {col?.name?.first} <i className="fa-regular fa-user" />
               </span>
          );
     };

     const handleColPicture = (col) => {
          return <img src={col?.picture?.thumbnail} />;
     };

     const columns = [
          { field: "name", header: "Name", body: handleColStatus },
          { field: "cell", header: "Contato" },
          { field: "email", header: "@" },
          { field: "", header: "Picture", body: handleColPicture },
     ];

     const columnsTree = [
          {
               field: "name",
               header: "Name",
               expander: true,
          },
          { field: "size", header: "Type" },
          { field: "type", header: "Size" },
     ];

     const actionTemplate = () => {
          return (
               <div className="flex flex-wrap gap-2">
                    <Button primary label="Editar" />
                    <Button outline label="Excluir" />
               </div>
          );
     };

     return (
          <Container>
               <H2>Table</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <Content>
                              <h3>Basic</h3>
                              <Detail></Detail>
                              {dataTable.length > 0 && (
                                   <Table value={dataTable} paginator rows={5}>
                                        {columns.map((col, i) => (
                                             <Column
                                                  key={i}
                                                  field={col.field}
                                                  header={col.header}
                                                  body={col.body}
                                                  sortable
                                             />
                                        ))}
                                        <Column
                                             key="action"
                                             body={actionTemplate}
                                        />
                                   </Table>
                              )}
                              <TreeTable
                                   value={dataTreeTable}
                                   paginator
                                   rows={5}
                              >
                                   {columnsTree.map((col, i) => (
                                        <Column
                                             key={col.field}
                                             field={col.field}
                                             header={col.header}
                                             expander={col.expander}
                                        />
                                   ))}
                                   <Column key="action" body={actionTemplate} />
                              </TreeTable>
                         </Content>
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
