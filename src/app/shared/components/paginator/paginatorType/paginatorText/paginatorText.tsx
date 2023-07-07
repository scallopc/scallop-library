import React from "react";
import { PaginatorTextWrapper } from "./styles";

export function PaginatorText({ currentPage, totalPages, onChangePage, text }) {
     const handlePageChange = (page) => {
          if (page >= 1 && page <= totalPages) {
               onChangePage(page);
          }
     };

     return (
          <PaginatorTextWrapper>
               <button onClick={() => handlePageChange(currentPage - 1)}>
                    <i className="bi bi-chevron-left" />{" "}
               </button>
               <span>{`Page ${currentPage} of ${totalPages}`}</span>
               <button onClick={() => handlePageChange(currentPage + 1)}>
                    <i className="bi bi-chevron-right" />
               </button>
          </PaginatorTextWrapper>
     );
}
