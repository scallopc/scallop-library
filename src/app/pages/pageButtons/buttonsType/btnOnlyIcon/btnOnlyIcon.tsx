import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../shared/components";

export function BtnOnlyIcon() {
     return (
          <Content>
               <h3>Only icon</h3>
               <SmallDetail>
                    {" "}
                    To display only an icon, do not insert label. The library
                    used for icons is"FontAwesomeIcon"
               </SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {` <Button
                    primary
                    md
                    icon="fa-regular fa-plus"
               />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button primary md icon="fa-regular fa-plus" />
               </div>
          </Content>
     );
}
