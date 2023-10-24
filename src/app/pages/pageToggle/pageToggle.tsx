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
import { Toggle } from "../../shared/components";
import Properties from "../properties/properties";

export function PageToggle() {
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
               <H2>Toggle Switch</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>
                              ToggleSwitch is a reusable component that displays
                              a switch visually represented by a slider. It
                              allows users to toggle between two states, usually
                              represented by "on" and "off". The component can
                              be used in web applications to provide an
                              intuitive way to enable or disable a
                              functionality, option or setting.
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
