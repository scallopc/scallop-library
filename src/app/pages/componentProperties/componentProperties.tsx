import React from "react";
import { Content, SmallDetail } from "../styles";
import { Column, Table } from "../../shared/components";

export default function ComponentProperties({ data }) {
     const columnsProps = [
          { field: "name", header: "Name" },
          { field: "type", header: "Type" },
          { field: "description", header: "Description" },
     ];

     return (
          <Content>
               <h3>Properties </h3>
               <SmallDetail>
                    We use some attributes to compose the component
               </SmallDetail>
               <Table value={data}>
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
