import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../shared/components";

export function BtnDisabled() {
     return (
          <Content>
               <h3>Disabled</h3>
               <SmallDetail>To set the button as disabled</SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {`<Button
                              primary
                              md
                              icon="fa-regular fa-plus"
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
                         primary
                         md
                         icon="fa-regular fa-plus"
                         label="Medium"
                         disabled
                    />
                    <Button outline md label="Medium" disabled />
                    <Button text md label="Medium" disabled />
               </div>
          </Content>
     );
}
