import { useEffect, useRef, useState } from "react";
import { ContainerPanelMenu } from "../containerPanelMenu";
import { IMenuIconOptions } from "../panelMenu";
import { Icon, IconItem, IconsContainer } from "../styles";

export function Kebab({ listKebab, type, idApp, idGroup }: IMenuIconOptions) {
  const [openKebabList, setOpenKebabList] = useState(false);
  let ref = useRef<any>(null);

  const handlerClickOutside = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      setOpenKebabList(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handlerClickOutside, true);
    window.addEventListener("click", handlerClickOutside, true);
    return () => {
      window.removeEventListener("click", handlerClickOutside);
    };
  }, []);

  return (
    <IconItem
      type={type}
      className="relative"
      onClick={() => setOpenKebabList(!openKebabList)}
    >
      <Icon className="fa-regular fa-ellipsis-vertical" />
      <div ref={ref}>
        {listKebab?.map((item: any, i: any) => {
          return (
            <ContainerPanelMenu
              idApp={idApp}
              idGroup={idGroup}
              active={openKebabList}
              key={i}
              options={listKebab}
              close={() => setOpenKebabList(false)}
            />
          );
        })}
      </div>
    </IconItem>
  );
}
