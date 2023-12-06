import React, { useEffect, useState } from "react";
import {
     Box,
     Container,
     Content,
     Detail,
     DocumentationContainer,
     H2,
     H5,
} from "../styles";
import { Toggle, Properties} from "../../components";

export function PagePanel() {
     const [isChecked, setIsChecked] = useState(false);

     const toggleData = [
          {
               name: "checked",
               type: "boolean",
               description: "true or false",
          },
          {
               name: "onChange",
               type: "event",
               description:
                    "Callback to invoke when there is a change in the switch, the purpose of the event is to bring the new information about the state.",
          },
     ];

     return (
          <Container>
               <H2>Panel</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>
                              Panel is a reusable component ..
                         </p>

                         <Content>
                              <h3>Basic</h3>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`       const [isChecked, setIsChecked] = useState(false);
                                                                `}
                                        <br />
                                        {` const handleToggle = (checked: boolean) => {
                                                setIsChecked(checked);
                                            };`}{" "}
                                        <br />
                                   </pre>
                              </Detail>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {` <ToggleSwitch
                                   checked={isChecked}
                                   onChange={handleToggle}
                              />`}
                                   </pre>
                              </Detail>

                              <Toggle
                                   checked={isChecked}
                                   onChange={() => setIsChecked(!isChecked)}
                              />
                              <p>The switch is {isChecked ? "on" : "off"}.</p>
                         </Content>

                         <br />
                         <Properties data={toggleData} />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
