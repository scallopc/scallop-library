import Heading from "../heading/heading";
import { MenuOptions } from "../menuOptions/menuOptions";
import { ICard } from "./card";
import {
  CardBlockContainer,
  IconsContainerBlock,
  IconApp,
} from "./styles";
export default function CardBlock({
  type,
  block,
  list,
  listKebab,
  listConfig,
  handleClick,
  idGroup,
}: ICard) {
  return (
    <>
      {list?.map((item: any, i: any) => {
        return (
          <CardBlockContainer
            type={type}
            key={i}
            onClick={() => handleClick(item)}
          >
            <IconApp className={item.icon} iconColors={item.color} />
            {block ? (
              <IconsContainerBlock>
                <MenuOptions
                  type="doubleIcons"
                  listKebab={listKebab}
                  listConfig={listConfig}
                  idApp={item.id}
                  idGroup={idGroup}
                />
              </IconsContainerBlock>
            ) : (
              ""
            )}
            <Heading type="heading" headingSize="h6">
              <div
                style={{
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  maxWidth: "215px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.title}
              </div>
            </Heading>
            <Heading type="text" textSize="sm">
              <div
                style={{
                  height: "38px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}
              </div>
            </Heading>
          </CardBlockContainer>
        );
      })}
    </>
  );
}
