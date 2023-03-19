import { Container, IconContainer, Title } from "./styles";
import { Link, useLocation } from "react-router-dom";

export type IMenuRoutes = {
  to: string;
  icon?: any;
  title: string;
};

export default function MenuRoutes({ to, icon, title }: IMenuRoutes) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const btnClass = isActive ? "active" : " ";

  return (
    <Link to={to}>
      <Container className={btnClass}>
        <IconContainer className={icon} />
        <Title>{title}</Title>
      </Container>
    </Link>
  );
}
