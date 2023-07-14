import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../shared/components";

export function BtnWithIcon() {
     return (
          <Content>
               <h3>With icon</h3>
               <SmallDetail>
                    {" "}
                    To display only an icon, do not insert label. The library
                    used for icons is"FontAwesomeIcon"
               </SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {`<Button
                                        outline
                                        md
                                        icon="fa-regular fa-plus"
                                        label="Medium"
                                      />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button
                         outline
                         md
                         icon="fa-regular fa-plus"
                         label="Medium"
                    />
               </div>
          </Content>
     );
}
