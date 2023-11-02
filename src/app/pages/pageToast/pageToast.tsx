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
import { Button, Paginator } from "../../components";
import { getCountriesService } from "../../service";
import Properties from "../properties/properties";
import Toast from "../../components/toast/toast";

export function PageToast() {
     const toast = useRef(null);
     // const toastRef2 = useRef()

     const handleClickSuccess = () => {
          showSuccess("Logged in succesfully");
     };

     const handleClickError = () => {
          showError(
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit"
          );
     };

     const handleClickInfo = () => {
          showInfo("Logged in FAILL");
     };

     const handleClickWarn = () => {
          showWarn("Logged in FAILL");
     };

     const showSuccess = (message: string) => {
          toast.current.show({
               severity: "success",
               message: message,
          });
     };

     const showError = (message: string) => {
          toast.current.show({
               severity: "error",
               message: message,
          });
     };

     const showWarn = (message: string) => {
          toast.current.show({
               severity: "warn",
               message: message,
          });
     };

     const showInfo = (message: string) => {
          toast.current.show({
               severity: "info",
               message: message,
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
                         <p>Toast is used to display messages in an overlay.</p>
                         <Content>
                              <h3>Basic</h3>
                              <Toast ref={toast} />
                              <Button
                                   onClick={handleClickSuccess}
                                   outline
                                   sm
                                   label="Success"
                              />
                              <Button
                                   onClick={handleClickError}
                                   outline
                                   sm
                                   label="Error"
                              />
                              <Button
                                   onClick={handleClickWarn}
                                   outline
                                   sm
                                   label="Warn"
                              />
                              <Button
                                   onClick={handleClickInfo}
                                   outline
                                   sm
                                   label="Info"
                              />
                         </Content>

                         <br />
                         <Properties />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
