import { Button } from "../../components";
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
     BtnDanger
} from "./buttonsType";

export function PageButtons() {
     const dataProps = [
          {
               name: "primary",
               type: "boolean",
               description: "Set button as primary, is default mode",
          },
          {
               name: "outline",
               type: "boolean",
               description: "Set button as outline",
          },
          {
               name: "text",
               type: "boolean",
               description: "Set button as text",
          },
          {
               name: "rounded",
               type: "boolean",
               description: "Defines whether the button will be rounded",
          },
          {
               name: "disabled",
               type: "boolean",
               description: "Sets the button to disabled",
          },
          {
               name: "sm",
               type: "boolean",
               description: "Defines the size of the button for small",
          },
          {
               name: "md",
               type: "boolean",
               description:
                    "Defines the size of the button for medium, is default mode",
          },
          {
               name: "lg",
               type: "boolean",
               description: "Defines the size of the button for large",
          },
          {
               name: "icon",
               type: "string",
               description: "Defines the button icon",
          },
          {
               name: "label",
               type: "string",
               description: "Set the button label",
          },
          {
               name: "onClick",
               type: "event",
               description: "Action it should perform when clicked",
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
                         <BtnDanger />
                         <br />
                         <Properties data={dataProps} />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
