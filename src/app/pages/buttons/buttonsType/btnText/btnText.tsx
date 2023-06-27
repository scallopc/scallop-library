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
                         {`  <Button ghost md label="Medium" />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button ghost sm label="Small" />
                    <Button ghost md label="Medium" />
                    <Button ghost lg label="Large" />
               </div>
          </Content>
     );
}
