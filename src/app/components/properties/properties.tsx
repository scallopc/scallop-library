import React, { useState } from "react";
import { Content, SmallDetail } from "../../pages/styles";
import { Column, Table } from "..";

export function Properties(props) {
     const { data } = props;

     const columnsProps = [
          { field: "name", header: "Name" },
          { field: "type", header: "Type" },
          { field: "description", header: "Description" },
     ];

     const dataDefault = [
          {
               name: "Lorem, ipsum",
               type: "Lorem",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          },
     ];

     return (
          <Content>
               <h3>Properties </h3>
               <SmallDetail>
                    We use some attributes to compose the component
               </SmallDetail>
               <Table value={data ? data : dataDefault}>
                    {columnsProps.map((col, i) => (
                         <Column
                              key={i}
                              field={col.field}
                              header={col.header}
                         />
                    ))}
               </Table>
          </Content>
     );
}
