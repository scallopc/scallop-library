import { ContainerHeading, ContainerText } from "./styles";

export type IHeading = {
  children: React.ReactNode;
  type: "heading" | "text";
  headingSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textSize?: "xsm" | "sm" | "md" | "lg";
  textTransform?: "uppercase" | "initial" | "lowercase";
  textAlign?: "center" | "initial" | "end";
  fontStyle?: "italic" | "initial";
  fontWeight?: "bold" | "light";
  onClick?: () => void;
};

export default function Heading({
  children,
  textSize,
  type,
  textTransform,
  textAlign,
  headingSize,
  fontStyle,
  fontWeight,
  onClick
}: IHeading) {
  const handleText = () => {
    switch (type) {
      case "heading":
        return (
          <ContainerHeading
            typeHeading={headingSize}
            textTransform={textTransform}
            textAlign={textAlign}
            textStyle={fontStyle}
            fontWeight={fontWeight}
            onClick={onClick}
          >
            {children}
          </ContainerHeading>
        );
      default:
        return (
          <ContainerText typeText={textSize} textTransform={textTransform} textAlign={textAlign} textStyle={fontStyle} fontWeight={fontWeight} onClick={onClick}>
            {children}
          </ContainerText>
        );
    }
  };

  return <>{handleText()}</>;
}
