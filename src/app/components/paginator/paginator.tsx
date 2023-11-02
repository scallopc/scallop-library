import React from "react";
import { PaginatorProps } from "./paginator.model";
import { PaginatorWrapper } from "./paginatorType/paginatorNumber/styles";
import { PaginatorNumber, PaginatorText } from "./paginatorType";

export function Paginator({
     text,
     currentPage,
     totalPages,
     onChangePage,
}: PaginatorProps) {
     const handlePaginatorType = () => {
          if (text) {
               return (
                    <PaginatorText
                         text={text}
                         currentPage={currentPage}
                         totalPages={totalPages}
                         onChangePage={onChangePage}
                    />
               );
          } else {
               return (
                    <PaginatorNumber
                         currentPage={currentPage}
                         totalPages={totalPages}
                         onChangePage={onChangePage}
                    />
               );
          }
     };

     return <>{handlePaginatorType()}</>;
}
