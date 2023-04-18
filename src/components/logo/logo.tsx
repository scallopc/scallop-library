import { Image } from "./styles";

export type ILogo = {
  size: "small" | "medium" | "large";
  //logo: "eleeva" | "vertice" | "verticeDark" | "verticeLight";
  src: any;
};

export default function Logo({ size, src }: ILogo) {
  return (
    <>
      <Image size={size} src={src} />
    </>
  );
}
