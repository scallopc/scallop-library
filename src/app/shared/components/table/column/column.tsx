import React, { useState } from "react";
import { ColumnProps } from "../table.model";
import { HeaderCell, HeaderCellTH } from "../styles";

export function Column({
     field,
     header,
     expander,
     body,
     children,
     sortable,
     onClick,
     sortField,
}: ColumnProps) {
     const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
          null
     );
     const iconDefault = <i className="fa-solid fa-arrow-right-arrow-left" />;
     const iconAsc = <i className="fa-solid fa-arrow-up-short-wide" />;
     const iconDesc = <i className="fa-solid fa-arrow-down-short-wide" />;

     if (body) {
          return null; // O componente Column não renderiza nada diretamente se houver um template body definido
     }

     const handleSortClick = () => {
          onClick();
          if (sortField === field) {
               setSortDirection((prevSortDirection) => {
                    if (prevSortDirection === "asc") {
                         return "desc";
                    } else if (prevSortDirection === "desc") {
                         return "asc";
                    } else {
                         return "asc";
                    }
               });
          }
     };

     const SortIcon = sortDirection === "asc" ? iconAsc : iconDesc;

     return (
          <HeaderCellTH onClick={() => handleSortClick()}>
               <HeaderCell className={sortable ? "flexible" : ""}>
                    {header}
                    {sortable && (
                         <span>{sortDirection ? SortIcon : iconDefault}</span>
                    )}
               </HeaderCell>
          </HeaderCellTH>
     );
}
