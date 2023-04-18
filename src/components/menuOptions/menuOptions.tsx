import { ButtonMenu } from "./types/buttonMenu";
import { Config } from "./types/config";
import { Kebab } from "./types/kebab";

export type IMenuIconOptions = {
  children?: React.ReactNode;
  handleClickConfig?: (e) => void;
  handleClickKebab?: (e) => void;
  listKebab?: any;
  listConfig?: any;
  listBtn?: any;
  idApp?: any;
  idGroup?: any;
  type: "doubleIcons" | "config" | "kebab" | "button";
  label?: string;
};

export function MenuOptions({
  listKebab,
  listConfig,
  listBtn,
  type,
  idApp,
  idGroup,
  label,
}: IMenuIconOptions) {
  const handleContainerIcons = (event: any) => {
    event.stopPropagation();
  };

  const handleTypeMenu = () => {
    switch (type) {
      case "config":
        return <Config listConfig={listConfig} type={type} idGroup={idGroup}/>;
      case "kebab":
        return <Kebab listKebab={listKebab} type={type} idGroup={idGroup} idApp={idApp}/>;
      case "button":
        return <ButtonMenu listBtn={listBtn} type={type} label={label} idGroup={idGroup}/>;
      default:
        break;
    }
  };
  return <div onClick={handleContainerIcons}>{handleTypeMenu()}</div>;
}
