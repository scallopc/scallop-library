import { useEffect, useState } from "react";
import { Table, Column, TreeTable } from "../../shared/components";
import {
     Container,
     Box,
     Content,
     H5,
     DocumentationContainer,
     Detail,
     H2,
} from "../styles";

import { getUsersService, NodesService } from "../../shared/service";

export function TablePageView() {
     const [dataTable, setDataTable] = useState([]);
     const [dataTreeTable, setDataTreeTable] = useState([]);

     useEffect(() => {
          handleDataTable();
          handleDataTreeTable();
     }, []);

     const handleDataTable = () => {
          getUsersService()
               .then((res: any) => {
                    setDataTable(res.data);
               })
               .catch(() => {});
     };

     const handleDataTreeTable = () => {
          NodesService.getTreeTableNodes()
               .then((res: any) => {
                    console.log(res);
                    setDataTreeTable(res);
               })
               .catch(() => {});
     };

     const handleColStatus = (col) => {
          return (
               <>
                    <span>
                         {col?.name} <i className="fa-regular fa-user" />
                    </span>
               </>
          );
     };

     const columns = [
          { field: "username", header: "Username" },
          { field: "name", header: "Name", body: handleColStatus },
          { field: "email", header: "Email" },
          { field: "website", header: "Site" },
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

     const nodes = [
          {
               key: "0",
               data: {
                    name: "Applications",
                    size: "100kb",
                    type: "Folder",
               },
               children: [
                    {
                         key: "0-0",
                         data: {
                              name: "React",
                              size: "25kb",
                              type: "Folder",
                         },
                         children: [
                              {
                                   key: "0-0-0",
                                   data: {
                                        name: "react.app",
                                        size: "10kb",
                                        type: "Application",
                                   },
                              },
                              {
                                   key: "0-0-1",
                                   data: {
                                        name: "native.app",
                                        size: "10kb",
                                        type: "Application",
                                   },
                              },
                              {
                                   key: "0-0-2",
                                   data: {
                                        name: "mobile.app",
                                        size: "5kb",
                                        type: "Application",
                                   },
                              },
                         ],
                    },
                    {
                         key: "0-1",
                         data: {
                              name: "editor.app",
                              size: "25kb",
                              type: "Application",
                         },
                    },
                    {
                         key: "0-2",
                         data: {
                              name: "settings.app",
                              size: "50kb",
                              type: "Application",
                         },
                    },
               ],
          },
     ];

     const actionTemplate = () => {
          return (
               <div className="flex flex-wrap gap-2">
                    <button type="button"> oi</button>
                    <button type="button">teste</button>
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

                              <Table value={dataTable}>
                                   {columns.map((col, i) => (
                                        <Column
                                             key={col.field}
                                             field={col.field}
                                             header={col.header}
                                             body={col.body}
                                        />
                                   ))}
                                   <Column key="action" body={actionTemplate} />
                              </Table>

                              <TreeTable value={dataTreeTable}>
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
