import Heading from "../heading/heading";
import { MenuOptions } from "../menuOptions/menuOptions";
import { ICard } from "./card";
import { CardListContainer, IconApp } from "./styles";

export default function CardList({
  type,
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
          <CardListContainer
            idGroup={idGroup}
            key={i}
            type={type}
            onClick={() => handleClick(item)}
          >
            <div className="flex gap-3 align-items-center">
              <IconApp className={item.icon} iconColors={item.color} />
              <div className="flex flex-column w-full">
                <div className="flex justify-content-between">
                  <Heading type="heading" headingSize="h6">
                    <div
                      style={{
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        maxWidth: "160px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </div>
                  </Heading>
                </div>
                <div
                  style={{
                    maxHeight: "38px",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Heading type="text" textSize="sm">
                    {item.description}
                  </Heading>
                </div>
              </div>
            </div>
            <MenuOptions
              type="kebab"
              listKebab={listKebab}
              listConfig={listConfig}
              idApp={item.id}
              idGroup={idGroup}
            />
          </CardListContainer>
        );
      })}
    </>
  );
}
