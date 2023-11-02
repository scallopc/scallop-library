import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../components";

export function BtnOutline() {
     return (
          <Content>
               <h3>Outline</h3>
               <SmallDetail>
                    Outline buttons display a border without a background
                    initially
               </SmallDetail>
               <Detail>
                    {" "}
                    <pre style={{ whiteSpace: "inherit" }}>
                         {` <Button outline md label="Medium" />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button outline sm label="Small" />
                    <Button outline md label="Medium" />
                    <Button outline lg label="Large" />
               </div>
          </Content>
     );
}
