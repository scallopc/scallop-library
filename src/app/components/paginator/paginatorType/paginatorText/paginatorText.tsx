import React from "react";
import { PaginatorTextWrapper } from "./styles";

export function PaginatorText({ currentPage, totalPages, onChangePage, text }) {
     const isFirstPage = currentPage === 1;
     const isLastPage = currentPage === totalPages;

     const handlePageChange = (page) => {
          if (page >= 1 && page <= totalPages) {
               onChangePage(page);
          }
     };

     return (
          <PaginatorTextWrapper>
               <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={isFirstPage}
                    className={isFirstPage ? "disabled" : ""}
               >
                    <i className="bi bi-chevron-left" />{" "}
               </button>
               <span>{`Page ${currentPage} of ${totalPages}`}</span>
               <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={isLastPage}
                    className={isLastPage ? "disabled" : ""}
               >
                    <i className="bi bi-chevron-right" />
               </button>
          </PaginatorTextWrapper>
     );
}
