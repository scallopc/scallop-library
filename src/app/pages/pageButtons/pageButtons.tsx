import { Button } from "../../shared/components";
import Properties from "../properties/properties";
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
import {
     BtnText,
     BtnOutline,
     BtnPrimary,
     BtnRounded,
     BtnDisabled,
     BtnOnlyIcon,
     BtnWithIcon,
} from "./buttonsType";

export function PageButtons() {
     const dataProps = [
          {
               name: " Lorem, ipsum",
               type: " Lorem",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aspernatur",
          },
     ];

     return (
          <Container>
               <H2>Button</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <BtnPrimary />
                         <BtnOutline />
                         <BtnText />
                         <BtnWithIcon />
                         <BtnOnlyIcon />
                         <BtnRounded />
                         <BtnDisabled />
                         <br />
                         <Properties data={dataProps} />
                         {/* <Content>
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
                                   <TableRow>
                                        <div>rounded</div>
                                        <div>boolean</div>
                                        <div>
                                             Defines if the button is rounded
                                        </div>
                                   </TableRow>
                              </Table>
                         </Content> */}
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
