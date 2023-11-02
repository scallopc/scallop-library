import React from "react";
import {
     Box,
     Container,
     Content,
     Detail,
     DocumentationContainer,
     H2,
     H5,
} from "../styles";
import Properties from "../properties/properties";
import { Calendar } from "../../components";

export function PageCalendar() {
     return (
          <Container>
               <H2>Calendar</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>Calendar.</p>
                         <Content>
                              <h3>Basic</h3>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`<ColorPicker />
                          `}
                                   </pre>
                              </Detail>

                              <Calendar />
                         </Content>

                         <br />
                         <Properties />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
