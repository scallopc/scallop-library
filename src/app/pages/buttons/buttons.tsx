import { Button } from "../../shared/components";
import {
     Box,
     Container,
     Content,
     Detail,
     DocumentationContainer,
     H2,
     H5,
     SmallDetail,
     Table,
     TableRow,
} from "../styles";

export function ButtonsPageView() {
     return (
          <Container>
               <H2>Button</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
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
                         <Content>
                              <h3>Outline</h3>
                              <SmallDetail>
                                   Outline buttons display a border without a
                                   background initially
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
                         <Content>
                              <h3>Ghost</h3>
                              <SmallDetail>
                                   Text buttons are displayed as textual
                                   elements
                              </SmallDetail>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`  <Button ghost md label="Medium" />`}
                                   </pre>
                              </Detail>
                              <div className="flex align-items-center gap-2">
                                   <Button ghost sm label="Small" />
                                   <Button ghost md label="Medium" />
                                   <Button ghost lg label="Large" />
                              </div>
                         </Content>
                         <Content>
                              <h3>With icon</h3>
                              <SmallDetail>
                                   {" "}
                                   To display only an icon, do not insert label.
                                   The library used for icons
                                   is"FontAwesomeIcon"
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
                         <Content>
                              <h3>Only icon</h3>
                              <SmallDetail>
                                   {" "}
                                   To display only an icon, do not insert label.
                                   The library used for icons
                                   is"FontAwesomeIcon"
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
                                   <Button
                                        primary
                                        md
                                        icon="fa-regular fa-plus"
                                   />
                              </div>
                         </Content>
                         <Content>
                              <h3>Disabled</h3>
                              <SmallDetail>
                                   To set the button as disabled
                              </SmallDetail>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`<Button
                                        primary
                                        md
                                        icon="fa-regular fa-plus"
                                        label="Medium"
                                        disabled
                                        />`}
                                   </pre>
                              </Detail>
                              <div className="flex align-items-center gap-2">
                                   <Button
                                        primary
                                        md
                                        icon="fa-regular fa-plus"
                                        label="Medium"
                                        disabled
                                   />
                              </div>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`
                                         <Button outline md label="Medium" disabled />`}
                                   </pre>
                              </Detail>
                              <div className="flex align-items-center gap-2">
                                   <Button outline md label="Medium" disabled />
                              </div>
                         </Content>

                         <br />
                         <Content>
                              <h3>Properties </h3>
                              <SmallDetail>
                                   We use some attributes to compose the
                                   component
                              </SmallDetail>
                              <Table>
                                   <TableRow>
                                        <b>Name</b>
                                        <b>Type</b>
                                        <b>Description</b>
                                   </TableRow>
                                   <TableRow>
                                        <div>variant</div>
                                        <div>string</div>
                                        <div>
                                             Defines the button type, valid
                                             options are "primary", "outline"
                                             and "text"
                                        </div>
                                   </TableRow>
                                   <TableRow>
                                        <div>disabled</div>
                                        <div>boolean</div>
                                        <div>
                                             Defines if the button is disabled,
                                             valid options are "true" or "false"
                                        </div>
                                   </TableRow>
                                   <TableRow>
                                        <div>size</div>
                                        <div>string</div>
                                        <div>
                                             Size of the element, valid options
                                             are "sm", "md" and "lg"
                                        </div>
                                   </TableRow>
                              </Table>
                         </Content>
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
