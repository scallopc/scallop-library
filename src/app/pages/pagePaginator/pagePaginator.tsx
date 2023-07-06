import React, { useState } from "react";
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

export default function PagePaginator() {
     const [currentPage, setCurrentPage] = useState(1);
     const totalPages = 10;

     const handlePageChange = (page) => {
          setCurrentPage(page);
     };

     return (
          <Container>
               <H2>Paginator</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                         <Content>
                              <Paginator
                                   currentPage={currentPage}
                                   totalPages={totalPages}
                                   onChangePage={handlePageChange}
                              />
                         </Content>
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
