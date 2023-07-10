import React from "react";
import { PaginatorWrapper } from "./styles";
import { PaginatorProps } from "../../paginator.model";

export function PaginatorNumber({
     currentPage,
     totalPages,
     onChangePage,
}: PaginatorProps) {
     const isFirstPage = currentPage === 1;
     const isLastPage = currentPage === totalPages;

     const handlePageChange = (page) => {
          if (page >= 1 && page <= totalPages) {
               onChangePage(page);
          }
     };

     const renderPageNumbers = () => {
          const pageNumbers = [];
          const startPage = Math.max(1, currentPage - 2);
          const endPage = Math.min(startPage + 4, totalPages);

          for (let i = startPage; i <= endPage; i++) {
               pageNumbers.push(
                    <button
                         key={i}
                         onClick={() => handlePageChange(i)}
                         className={i === currentPage ? "active" : ""}
                    >
                         {i}
                    </button>
               );
          }
          return pageNumbers;
     };

     return (
          <PaginatorWrapper>
               {!isFirstPage && (
                    <>
                         <button onClick={() => handlePageChange(1)}>
                              {" "}
                              <i className="bi bi-chevron-double-left" />
                         </button>

                         <button
                              onClick={() => handlePageChange(currentPage - 1)}
                         >
                              <i className="bi bi-chevron-left" />
                         </button>
                    </>
               )}
               {renderPageNumbers()}
               {!isLastPage && (
                    <>
                         <button
                              onClick={() => handlePageChange(currentPage + 1)}
                         >
                              <i className="bi bi-chevron-right" />
                         </button>
                         <button onClick={() => handlePageChange(totalPages)}>
                              <i className="bi bi-chevron-double-right" />
                         </button>
                    </>
               )}
          </PaginatorWrapper>
     );
}
