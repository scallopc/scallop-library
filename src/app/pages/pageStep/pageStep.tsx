import React, { useEffect, useRef, useState } from "react";
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
import { Button, Properties, Step } from "../../components";
import { getCountriesService } from "../../service";
import Toast from "../../components/toast/toast";

export function PageStep() {
    
     const CHECKOUT_STEPS = [
          {
            name: "Customer",
            Component: () => <div>Provide your contact details.</div>,
          },
          {
            name: "Shipping",
            Component: () => <div>Enter your shipping address.</div>,
          },
          {
            name: "Payment",
            Component: () => <div>Complete payment for your order.</div>,
          },
          {
            name: "Delivered",
            Component: () => <div> Your order has been delivered.</div>,
          },
        ];

        
     return (
          <Container>
               <H2>Step</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>Toast is used to display messages in an overlay.</p>
                         <Content>
                              <h3>Basic</h3>
                              <Step stepsConfig={CHECKOUT_STEPS} />
                              
                         </Content>

                         <br />
                         <Properties />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
