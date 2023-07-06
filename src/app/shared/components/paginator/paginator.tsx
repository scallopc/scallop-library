import React from "react";
import { PaginatorProps } from "./paginator.model";
import { PaginatorWrapper } from "./styles";

export function Paginator({
     currentPage,
     totalPages,
     onChangePage,
}: PaginatorProps) {
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
               <button onClick={() => handlePageChange(1)}>First</button>

               <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
               </button>
               {renderPageNumbers()}
               <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
               </button>
               <button onClick={() => handlePageChange(totalPages)}>
                    Last
               </button>
          </PaginatorWrapper>
     );
}
