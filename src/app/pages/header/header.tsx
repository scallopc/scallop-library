import React, { useState } from "react";
import { Container } from "./styles";
import { menuStore, themeStore } from "../../store";

export function Header() {
     const { setShowMenu, showMenu } = menuStore();
     const { setTheme, theme } = themeStore();
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     return (
          <Container>
               <div>header</div>
               <div className="flex gap-2">
                    <i
                         onClick={() => setShowMenu(!showMenu)}
                         className="bi bi-list text-base"
                    />
                    <i
                         onClick={() => setTheme(!showMenu)}
                         className="bi bi-moon text-base"
                    />
                    <i
                         onClick={() => setTheme(!showMenu)}
                         className="bi bi-translate text-base"
                    />
               </div>
          </Container>
     );
}
