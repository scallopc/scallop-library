import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../components";

export function BtnDanger() {
     return (
          <Content>
               <h3>Danger</h3>
               <SmallDetail>To set the button as disabled</SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {`<Button
                              primary
                              md
                              icon="bi bi-plus"
                              label="Medium"
                              disabled
                              />`}
                         <br />
                         {` <Button outline md label="Medium" disabled />`}
                         <br />
                         {`  <Button text md label="Medium" disabled />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button
                         danger
                         icon="bi bi-trash"
                         label="Danger"
                    />
               </div>
          </Content>
     );
}
