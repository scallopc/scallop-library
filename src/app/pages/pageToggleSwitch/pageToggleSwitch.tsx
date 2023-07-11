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
import { ToggleSwitch } from "../../shared/components";
import ComponentProperties from "../componentProperties/componentProperties";

export default function PageToggleSwitch() {
     const [isChecked, setIsChecked] = useState(false);

     const toggleData = [
          {
               name: "currentPage",
               type: "number",
               description: "Current page of the item, the value starts at 1",
          },
          {
               name: "totalPages",
               type: "number",
               description: "Number of items per page",
          },
          {
               name: "onChangePage",
               type: "event",
               description:
                    "Callback to invoke when page changes, the event object contains information about the new state.",
          },
     ];

     return (
          <Container>
               <H2>Toggle Switch</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>Toggle Switch is used as</p>

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

                              <ToggleSwitch
                                   checked={isChecked}
                                   onChange={() => setIsChecked(!isChecked)}
                              />
                              <p>The switch is {isChecked ? "on" : "off"}.</p>
                         </Content>

                         <br />
                         <ComponentProperties data={toggleData} />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
