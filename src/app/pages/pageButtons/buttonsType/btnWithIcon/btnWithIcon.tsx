import React from "react";
import { Content, Detail, SmallDetail } from "../../../styles";
import { Button } from "../../../../components";

export function BtnWithIcon() {
     return (
          <Content>
               <h3>With icon</h3>
               <SmallDetail>
                    {" "}
                    To display only an icon, do not insert label.
               </SmallDetail>
               <Detail>
                    <pre style={{ whiteSpace: "inherit" }}>
                         {`<Button
                                        outline
                                        md
                                        icon="bi bi-plus"
                                        label="Medium"
                                      />`}
                    </pre>
               </Detail>
               <div className="flex align-items-center gap-2">
                    <Button
                         outline
                         md
                         icon="bi bi-plus"
                         label="Medium"
                    />
               </div>
          </Content>
     );
}
