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
     const [currentPage, setCurrentPage] = useState(1);
     const totalPages = 10;
     const [currentPageText, setCurrentPageText] = useState(1);
     const totalPagesText = 10;
     const [data, setData] = useState<any>([]);
     const namesPerPage = 5;

     useEffect(() => {
          handleDataTable();
     }, []);

     const handleDataTable = () => {
          getRandomUserService()
               .then((res: any) => {
                    const data = res.data.results;
                    console.log(data);
                    setData(data);
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
               description: "description",
          },
          {
               name: "rows",
               type: "number",
               description: "Number of rows to display in new page",
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
                                        {`<Paginator
                                   currentPage={currentPage}
                                   totalPages={totalPages}
                                   onChangePage={handlePageChange}
                              />`}
                                   </pre>
                              </Detail>
                              {data.map((item, i) => {
                                   return <div key={i}>{item.name.first}</div>;
                              })}
                              <Paginator
                                   currentPage={currentPage}
                                   totalPages={totalPages}
                                   onChangePage={handlePageChange}
                              />
                         </Content>
                         <Content>
                              <h3>Text</h3>
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
