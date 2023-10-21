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
import { Button, Paginator } from "../../shared/components";
import { getCountriesService } from "../../shared/service";
import Properties from "../properties/properties";
import Toast from "../../shared/components/toast/toast";

export function PageToast() {
     const toast = useRef(null);
     // const toastRef2 = useRef()

     const handleClick = () => {
          showSuccess("succss", "Logged in succesfully");
     };

     const showSuccess = (summary: string, detail: string) => {
          toast.current.show({
               severity: "error",
               summary: summary,
               detail: detail,
               life: 3000,
          });
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
               <H2>Toast</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>Toast details</p>
                         <Content>
                              <h3>Basic</h3>
                              <Toast ref={toast} timeout={2000} />
                              <Button
                                   onClick={handleClick}
                                   outline
                                   sm
                                   label="Small"
                              />
                         </Content>

                         <br />
                         <Properties />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
