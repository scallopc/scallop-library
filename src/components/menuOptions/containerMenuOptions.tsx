import Heading from "../heading/heading";
import { ContainerOptions, ItemContainerOptions } from "./styles";

interface MenuItemCommandParams {
  originalEvent: React.SyntheticEvent;
  item: IContainerMenuOptions;
}

export type IContainerMenuOptions = {
  children?: React.ReactNode;
  options?: Array<any>;
  active?: any;
  close?: () => void;
  idApp?: any;
  idGroup?: any;
  command?(e: MenuItemCommandParams): void;
};

export function ContainerMenuOptions({
  options,
  active,
  idApp,
  idGroup,
}: IContainerMenuOptions) {
  const handleClick = (e: any, item: any): void => {
    if (item.command) {
      item.command({
        originalEvent: e,
        item: item,
        idApp: idApp,
        idGroup: idGroup,
      });
    }
  };

  return (
    <>
      {active && (
        <ContainerOptions>
          {options?.map((item: any, i: any) => {
            return (
              <ItemContainerOptions
                key={i}
                onClick={(e) => handleClick(e, item)}
              >
                <i className={item.icon} />
                {item.name}
              </ItemContainerOptions>
            );
          })}
        </ContainerOptions>
      )}
    </>
  );
}
