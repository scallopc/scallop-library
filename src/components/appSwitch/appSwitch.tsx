import { useEffect, useRef, useState } from "react";
import { AppItem, AppsContainer, Icon, IconFak, MenuContainer } from "./styles";

export type IMenu = {
  menu?: any;
  handleClick?: (e: any) => void;
};

export default function AppSwitch({ menu, handleClick }: IMenu) {
  const [open, setOpen] = useState(false);
  let ref = useRef<any>();

  useEffect(() => {
    const handler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [open]);

  return (
    <div ref={ref}>
      <MenuContainer
        className="fak fa-menu-ellipsis"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <AppsContainer>
          {menu?.map((item, i) => (
            <AppItem key={i} onClick={() => handleClick(item)}>
              <Icon className={item.icon} iconColors={item.color}/>
              <span>{item.name}</span>
            </AppItem>
          ))}
        </AppsContainer>
      )}
    </div>
  );
}
