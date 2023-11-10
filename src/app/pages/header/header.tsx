import React, { useState } from "react";
import { Container } from "./styles";
import { menuStore } from "../../store";

export function Header() {
     const { setShowMenu, showMenu } = menuStore();
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     return (
          <Container>
               <div>header</div>
               <div>
                    <i
                         onClick={() => setShowMenu(!showMenu)}
                         className="bi bi-list"
                    />
               </div>
          </Container>
     );
}
