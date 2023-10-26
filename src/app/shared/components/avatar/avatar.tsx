import {
  Container,
  HoverChangeImage,
  Image,
  Initials,
  LabelActive,
} from "./styles";

export type IAvatar = {
  children?: React.ReactNode;
  size: "small" | "medium" | "large" | "xlarge";
  active?: "on" | "off";
  image?: string;
  name?: string;
  id?: string;
  label?: string;
  onClick?: () => void;
  handleChangeFile?: (e) => void;
  edit?: true;
};

export default function Avatar({
  size,
  image,
  active,
  label,
  onClick,
  handleChangeFile,
  edit,
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
      return <i className="bi bi-person" />;
    }
  };

  const handleActive = () => {
    if (active) {
      return <LabelActive active={active} />;
    }
  };

  const handleChangeImage = () => {
    if (edit) {
      return (
        <HoverChangeImage>
         <i className="bi bi-camera" />
          {/* <input hidden id="uploadImage" name="file" type="file" accept=".jpg, .png, .jpeg, .webp" onChange={(e) => a(e)}/> */}
        </HoverChangeImage>
      );
    }
  };

  return (
    <>
      <Container size={size} onClick={onClick} edit={edit}>
        {handleImage()}
        {handleActive()}
        {handleChangeImage()}
      </Container>
    </>
  );
}
