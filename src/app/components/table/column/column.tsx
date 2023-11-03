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
     const iconDefault = <i className="bi bi-arrow-down-up" />;
     const iconAsc = <i className="bi bi-sort-up" />;
     const iconDesc = <i className="bi bi-sort-down" />;

     if (body) {
          return null; // O componente Column não renderiza nada diretamente se houver um template body definido
     }

     const handleSortClick = () => {
          onClick();
          if (sortField === field) {
               setSortDirection((prevSortDirection) => {
                    if (prevSortDirection === "asc") {
                         return "desc";
                    } else {
                         return "asc";
                    }
               });
          }
     };

     //  const SortIcon = sortDirection === "desc" ? iconAsc : iconDesc;
     const SortIcon =
          sortField === field
               ? sortDirection === "asc"
                    ? iconAsc
                    : iconDesc
               : iconDefault;

     return (
          <HeaderCellTH onClick={() => handleSortClick()}>
               <HeaderCell className={sortable ? "flexible" : ""}>
                    {header}
                    {sortable && <span>{SortIcon}</span>}
               </HeaderCell>
          </HeaderCellTH>
     );
}
