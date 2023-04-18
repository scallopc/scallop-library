import { Container } from "./styles";

export type ILine = {
  direction: "horizontal" | "vertical";
};

export default function Line({ direction }: ILine) {
  return <Container direction={direction} />;
}
