import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faGear, faTrashCan, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Icon, IconCheck, IconsContainer } from "./styles";

export type IList = {
  id?: number;
  name?: string;
  handleClick?: any;
  handleDelete?: any;
  handleAdd?: any;
  list?: any;
  type?: "configurate" | "device";
};

export default function List({
  id,
  name,
  handleClick,
  handleDelete,
  handleAdd,
  list,
  type,
}: IList) {
  const handleList = () => {
    if (type === "configurate") {
      return (
        <IconsContainer>
          <Icon icon={faGear} onClick={() => handleClick()} />
          <Icon icon={faTrashCan} onClick={() => handleDelete()} />
        </IconsContainer>
      );
    } else {
      return (
        <IconsContainer>
          <IconCheck icon={faCheckCircle} onClick={() => handleAdd()} />
          <Icon icon={faPlus} onClick={() => handleAdd()} />
        </IconsContainer>
      );
    }
  };

  return (
    <Container type={type} list={list} name={name}>
      <span>{name}</span>
      {handleList()}
    </Container>
  );
}
