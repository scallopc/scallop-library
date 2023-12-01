import React, { ReactNode, useState } from "react";
import { Header } from "./styles";

interface PanelProps {
     title?: string;
     children: ReactNode;
     toggleable?: boolean;
     headerTemplate?: () => React.ReactNode;
     setToggleable?: () => void;
}

export function Panel({
     title,
     children,
     headerTemplate,
     toggleable,
     setToggleable,
}: PanelProps) {
     const [isCollapsed, setCollapsed] = useState(false);

     const toggleCollapse = () => {
          setCollapsed((prevCollapsed) => !prevCollapsed);
     };

     return (
          <div>
               <Header onClick={setToggleable}>
                    {headerTemplate ? (
                         headerTemplate()
                    ) : (
                         <h2>{title || "Cabeçalho Padrão"}</h2>
                    )}
                    <span>{toggleable ? "Expandir" : "Recolher"}</span>
               </Header>
               {!toggleable && (
                    <div style={{ padding: "10px" }}>{children}</div>
               )}
          </div>
     );
}
