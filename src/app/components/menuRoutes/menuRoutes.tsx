import { Container, IconContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

export type IMenuRoutes = {
     to: string;
     icon?: any;
     title: string;
};

export function MenuRoutes({ to, icon, title }: IMenuRoutes) {
     const location = useLocation();
     const isActive = location.pathname === to;
     const btnClass = isActive ? "active" : " ";

     return (
          <Link to={to}>
               <Container className={btnClass}>
                    <IconContainer className={icon} />
                    <span>{title}</span>
               </Container>
          </Link>
     );
}
