import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Initials, LabelActive } from "./styles";

export type IAvatar = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  active?: "on" | "off";
  image?: string;
  name?: string;
  id?: string;
  label?: string;
};

export default function Avatar({
  size,
  image,
  active,
  label,
}: IAvatar) {
  const randomColor = () => {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);
    return color;
  };

  const handleImage = () => {
    if (image) {
      return <Image src={image} />;
    } else if (label && label.length <= 2) {
      return (
        <Initials
          style={{
            backgroundColor: randomColor(),
            color: "#FFF",
          }}
        >
          {label}
        </Initials>
      );
    } else {
      return <FontAwesomeIcon icon={faUser} />;
    }
  };

  const handleActive = () => {
    if (active) {
      return <LabelActive  active={active}/>;
    }
  };

  return (
    <>
      <Container size={size}>
        {handleImage()}
        {handleActive()}
      </Container>
    </>
  );
}
