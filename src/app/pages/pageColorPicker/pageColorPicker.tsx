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
import {ColorPicker, Properties}  from "../../components";

export function PageColorPicker() {
     const [colorPicked, setColorPicked] = useState<string>("#000000");

     useEffect(() => {}, []);

     const handleColorChange = (color: string) => {
          console.log("Cor selecionada:", color);
          // Faça algo com a cor selecionada, como atualizar o estado do componente pai
     };

     const paginatorData = [
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
               <H2>ColorPicker</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>
                              ColorPicker is an input component to select a
                              color.
                         </p>
                         <Content>
                              <h3>Basic</h3>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`<ColorPicker />
                            `}
                                   </pre>
                              </Detail>

                              <ColorPicker
                                   style={{ width: 400, height: 350 }}
                                   handleColorSelected={(color) =>
                                        setColorPicked(color)
                                   }
                              />

                              <div
                                   className="colorPicked"
                                   style={{ background: colorPicked }}
                              ></div>
                         </Content>

                         <br />
                         <Properties />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
