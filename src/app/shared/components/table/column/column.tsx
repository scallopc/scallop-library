import React from "react";
import { ColumnProps } from "../table.model";
import { HeaderCell } from "../styles";

export function Column({
     field,
     header,
     expander,
     body,
     children,
}: ColumnProps) {
     if (body) {
          return null; // O componente Column não renderiza nada diretamente se houver um template body definido
     }

     return null;
}
