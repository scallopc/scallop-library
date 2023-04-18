import CardBlock from "./cardBlock";
import CardList from "./cardList";
import CardTopology from "./cardTopology";
import CardViewCi from "./cardViewCi";
import { Badge, CardDefault, ContainerBadge } from "./styles";

export type ICard = {
  children?: React.ReactNode;
  type?: "list" | "block" | "view_ci" | "topology" | "default";
  title?: string;
  description?: string;
  id?: string;
  image?: string;
  handleClick?: (e) => void;
  handleClickKebab?: (e) => void;
  hideModalOptions?: () => void;
  icon?: string;
  iconColors?: string;
  block?: boolean;
  typeView?: string;
  count?: string;
  route?: string;
  group?: string;
  borderColor?: string;
  tags?: any;
  style?: any;
  list?: any;
  listKebab?: any;
  listConfig?: any;
  idGroup?: any;
};

export default function Card({
  type,
  title,
  description,
  children,
  icon,
  count,
  group,
  tags,
  style,
  handleClick,
  list,
  listKebab,
  listConfig,
  idGroup
}: ICard) {
  const handleCard = () => {
    switch (type) {
      case "list":
        return (
          <CardList
            type={type}
            list={list}
            listKebab={listKebab}
            listConfig={listConfig}
            idGroup={idGroup}
            handleClick={(e) => handleClick(e)}
          />
        );
      case "block":
        return (
          <CardBlock
            type={type}
            list={list}
            listKebab={listKebab}
            listConfig={listConfig}
            handleClick={(e) => handleClick(e)}
            block={true}
          />
        );
      case "view_ci":
        return (
          <CardViewCi
            type={type}
            title={title}
            description={description}
            icon={icon}
            typeView={type}
            count={count}
          />
        );
      case "topology":
        return (
          <CardTopology
            type={type}
            title={title}
            description={description}
            group={group}
          >
            <ContainerBadge>
              {tags?.map((tags, i) => {
                return <Badge key={i}> {tags}</Badge>;
              })}
            </ContainerBadge>
          </CardTopology>
        );
      default:
        return <CardDefault style={style}>{children}</CardDefault>;
    }
  };

  return <>{handleCard()}</>;
}
