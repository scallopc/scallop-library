import React, { useState } from "react";
import { Content, SmallDetail } from "../styles";
import { Column, Table } from "../../shared/components";

export default function Properties(props) {
     const { data } = props;
     const [dataProps, setDataProps] = useState<any>([]);

     const columnsProps = [
          { field: "name", header: "Name" },
          { field: "type", header: "Type" },
          { field: "description", header: "Description" },
     ];

     const dataDefault = [
          {
               name: " Lorem, ipsum",
               type: " Lorem",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aspernatur",
          },
     ];

     // handleData = () => {

     // }

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
