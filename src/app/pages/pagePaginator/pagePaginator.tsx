import React, { useEffect, useState } from "react";
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
import { Paginator } from "../../shared/components";
import ComponentProperties from "../componentProperties/componentProperties";
import { getRandomUserService } from "../../shared/service";

export default function PagePaginator() {
     const [names, setNames] = useState<any>([]);
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 5;
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const displayedNames = names?.slice(startIndex, endIndex);

     const [currentPageText, setCurrentPageText] = useState(1);
     const totalPagesText = 4;
     const startIndexText = (currentPageText - 1) * totalPagesText;
     const endIndexText = startIndexText + totalPagesText;
     const displayedNamesText = names?.slice(startIndexText, endIndexText);

     useEffect(() => {
          handleNamesList();
     }, []);

     const handleNamesList = () => {
          getRandomUserService()
               .then((res: any) => {
                    const data = res.data.results;
                    setNames(data);
               })
               .catch(() => {});
     };

     const handlePageChange = (page) => {
          setCurrentPage(page);
     };

     const handlePageChangeText = (page) => {
          setCurrentPageText(page);
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
               <H2>Paginator</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <p>
                              Paginator is used as a component with the
                              currentPage, totalPages and onChangePage
                              properties to manage the first index and the
                              number of records to be displayed per page. The
                              total number of records must be associated with
                              the totalPages property.
                         </p>
                         <Content>
                              <h3>Basic</h3>
                              <SmallDetail></SmallDetail>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`const [names, setNames] = useState<any>([]);`}
                                        <br />
                                        {`const [currentPage, setCurrentPage] = useState(1);`}{" "}
                                        <br />
                                        {`const itemsPerPage = 5;`} <br />
                                        {`const startIndex = (currentPage - 1) * itemsPerPage;`}{" "}
                                        <br />
                                        {`const endIndex = startIndex + itemsPerPage;`}{" "}
                                        <br />
                                        {`const displayedNames = names?.slice(startIndex,    <br />endIndex);`}
                                   </pre>
                              </Detail>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`<Paginator
                                   currentPage={currentPage}
                                   totalPages={totalPages}
                                   onChangePage={handlePageChange}
                              />`}
                                   </pre>
                              </Detail>
                              {displayedNames?.map((item, i) => {
                                   return <div key={i}>{item.name.first}</div>;
                              })}
                              <Paginator
                                   currentPage={currentPage}
                                   totalPages={itemsPerPage}
                                   onChangePage={handlePageChange}
                              />
                         </Content>
                         <Content>
                              <h3>Text</h3>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`     const [currentPageText, setCurrentPageText] = useState(1);
`}
                                        <br />
                                        {`const itemsPerPageText = 5;`} <br />
                                        {`const startIndexText = (currentPageText - 1) * itemsPerPageText;`}{" "}
                                        <br />
                                        {`const endIndexText = startIndexText + itemsPerPageText;`}{" "}
                                        <br />
                                        {`const displayedNamesText = names?.slice(startIndexText, endIndexText);`}
                                   </pre>
                              </Detail>
                              <Detail>
                                   <pre style={{ whiteSpace: "inherit" }}>
                                        {`<Paginator
                                  text
                                  currentPage={currentPageText}
                                  totalPages={totalPagesText}
                                  onChangePage={handlePageChangeText}
                                />`}
                                   </pre>
                              </Detail>
                              {displayedNamesText?.map((item, i) => {
                                   return <div key={i}>{item.name.first}</div>;
                              })}
                              <Paginator
                                   text
                                   currentPage={currentPageText}
                                   totalPages={totalPagesText}
                                   onChangePage={handlePageChangeText}
                              />
                         </Content>

                         <br />
                         <ComponentProperties data={paginatorData} />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
