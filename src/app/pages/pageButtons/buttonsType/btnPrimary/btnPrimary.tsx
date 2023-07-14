import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../shared/components";

export function BtnPrimary() {
     return (
          <Content>
               <h3>Primary</h3>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {` <Button primary sm label="Small" />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button primary sm label="Small" />
                    <Button primary md label="Medium" />
                    <Button primary lg label="Large" />
               </div>
          </Content>
     );
}
