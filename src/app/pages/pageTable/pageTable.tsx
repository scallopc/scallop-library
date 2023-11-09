import { useEffect, useState } from "react";
import { Table, Column, TreeTable, Properties } from "../../components";
import {
     Container,
     Box,
     Content,
     H5,
     DocumentationContainer,
     Detail,
     H2,
} from "../styles";

import {
     getRandomUserService,
     NodesService,
     getUserGithubService,
     getBrokersService,
     ProductService,
} from "../../service";

export function PageTable() {
     const [dataTable, setDataTable] = useState([]);
     const [dataTreeTable, setDataTreeTable] = useState([]);
     const [brokers, setBrokers] = useState([]);

     useEffect(() => {
          handleDataTable();
          handleDataTreeTable();
          handleBrokers();
     }, []);

     const handleDataTable = () => {
          getRandomUserService()
               .then((res: any) => {
                    const data = res.data.data;
                    setDataTable(data);
               })
               .catch(() => {});
     };
     const handleBrokers = () => {
          ProductService.getProductsMini()
               .then((res: any) => {
                    setBrokers(res);
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
                    {col?.first_name} <i className="bi bi-person" />
               </span>
          );
     };

     const handleColPicture = (col) => {
          return (
               <div>
                    <img
                         style={{
                              borderRadius: "50px",
                              maxWidth: "100%",
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                         }}
                         src={col?.avatar}
                    />
               </div>
          );
     };

     const columnsTableHolidays = [
          { field: "name", header: "Nome" },
          { field: "description", header: "Descrição" },
          { field: "category", header: "Categoria" },
          { field: "inventoryStatus", header: "Status" },
     ];

     const columns = [
          { field: "first_name", header: "Nome", body: handleColStatus },
          { field: "last_name", header: "Sobrenome" },
          { field: "email", header: "@" },
          { field: "", header: "Avatar", body: handleColPicture },
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
                    <div className=" text-xl cursor-pointer">
                         <i className="bi bi-pencil-square" />
                    </div>
                    <div className=" text-xl cursor-pointer">
                         <i className="bi bi-trash" />
                    </div>
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
                              <h3>Teste sort</h3>
                              {brokers.length > 0 && (
                                   <Table value={brokers} paginator rows={6}>
                                        {columnsTableHolidays.map((col, i) => (
                                             <Column
                                                  key={i}
                                                  field={col.field}
                                                  header={col.header}
                                             />
                                        ))}
                                   </Table>
                              )}
                         </Content>

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
                         </Content>
                         <Content>
                              <h3>TreeTable</h3>
                              <TreeTable
                                   value={dataTreeTable}
                                   paginator
                                   rows={5}
                              >
                                   {columnsTree.map((col, i) => (
                                        <Column
                                             sortable
                                             key={col.field}
                                             field={col.field}
                                             header={col.header}
                                             expander={col.expander}
                                        />
                                   ))}
                                   <Column key="action" body={actionTemplate} />
                              </TreeTable>
                         </Content>
                         <br />
                         <Properties />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
