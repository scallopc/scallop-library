import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../components";

export function BtnRounded() {
     return (
          <Content>
               <h3>Rounded</h3>
               <SmallDetail>
                    Rounded buttons have a circular border radius
               </SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {`<Button
                              primary
                              md
                              icon="bi bi-plus"
                              label="Medium"
                              rounded
                         />`}
                         <br />
                         {`<Button
                              outline
                              md
                              label="Medium"
                              rounded
                         />`}
                         <br />
                         {`<Button
                            primary md icon="bi bi-person"
                              rounded
                         />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button
                         primary
                         md
                         icon="bi bi-plus"
                         label="Medium"
                         rounded
                    />
                    <Button outline md label="Medium" rounded />
                    <Button primary md icon="bi bi-person" rounded />
               </div>
          </Content>
     );
}
