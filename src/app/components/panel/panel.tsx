import React, { ReactNode, useState } from "react";
import { ChildrenContainer, Header, IconColapse } from "./styles";

interface PanelProps {
     title?: string;
     children: ReactNode;
     toggleable?: boolean;
     headerTemplate?: () => ReactNode;
}

export function Panel({
     title,
     children,
     headerTemplate,
     toggleable,
}: PanelProps) {
     const [isCollapsed, setCollapsed] = useState(true);

     const toggleCollapse = () => {
          setCollapsed((prevCollapsed) => !prevCollapsed);
     };

     return (
          <div>
               <Header onClick={toggleCollapse}>
                    {headerTemplate ? (
                         <>{headerTemplate()}</>
                    ) : (
                         <h2>{title || "Cabeçalho Padrão"}</h2>
                    )}
                    {toggleable && (
                         <span>
                              {isCollapsed ? (
                                   <IconColapse className="fa-solid fa-chevron-right" />
                              ) : (
                                   <IconColapse className="fa-solid fa-chevron-down" />
                              )}
                         </span>
                    )}
               </Header>
               {toggleable ? (
                    <>
                         {" "}
                         {isCollapsed ? null : (
                              <ChildrenContainer>{children}</ChildrenContainer>
                         )}
                    </>
               ) : (
                    <ChildrenContainer>{children}</ChildrenContainer>
               )}
          </div>
     );
}
