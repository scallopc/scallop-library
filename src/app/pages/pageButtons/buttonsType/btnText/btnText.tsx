import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../shared/components";

export function BtnText() {
     return (
          <Content>
               <h3>Text</h3>
               <SmallDetail>
                    Text buttons are displayed as textual elements
               </SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {`  <Button text md label="Medium" />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button text sm label="Small" />
                    <Button text md label="Medium" />
                    <Button text lg label="Large" />
               </div>
          </Content>
     );
}
