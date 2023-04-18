import { Container } from "./styles";

export function HeightComponent({ children, style }) {
  return (
    <>
      <Container style={style}>{children}</Container>
    </>
  );
}
