import { useEffect, useRef, useState } from "react";
import { ContainerPanelMenu } from "../containerPanelMenu";
import { IMenuIconOptions } from "../panelMenu";
import { Icon, IconItem, IconsContainer } from "../styles";
import { Config } from "./config";
import { Kebab } from "./kebab";

export function DoubleIcons({
  listKebab,
  listConfig,
  type,
  idApp,
  idGroup,
}: IMenuIconOptions) {
  const [openGearList, setOpenGearList] = useState(false);
  const [openKebabList, setOpenKebabList] = useState(false);
  let ref = useRef<any>(null);

  const handlerClickOutside = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      setOpenGearList(false);
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
    <IconsContainer type={type}>
      <Config listConfig={listConfig} type={type} idGroup={idGroup} />
      <Kebab
        listKebab={listKebab}
        type={type}
        idGroup={idGroup}
        idApp={idApp}
      />
    </IconsContainer>
  );
}
