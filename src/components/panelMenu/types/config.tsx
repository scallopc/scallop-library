import { useEffect, useRef, useState } from "react";
import { ContainerPanelMenu } from "../containerPanelMenu";
import { IMenuIconOptions } from "../panelMenu";
import { Icon, IconItem, IconsContainer } from "../styles";

export function Config({ listConfig, type, idApp, idGroup }: IMenuIconOptions) {
  const [openGearList, setOpenGearList] = useState(false);
  let ref = useRef<any>(null);

  const handlerClickOutside = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      setOpenGearList(false);
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
      onClick={() => setOpenGearList(!openGearList)}
      className="relative"
    >
      <Icon className="fa-regular fa-gear" />
      <div ref={ref}>
        {listConfig?.map((item: any, i: any) => {
          return (
            <ContainerPanelMenu
              idApp={idApp}
              idGroup={idGroup}
              active={openGearList}
              key={i}
              options={listConfig}
              close={() =>setOpenGearList(false)}
            />
          );
        })}
      </div>
    </IconItem>
  );
}
