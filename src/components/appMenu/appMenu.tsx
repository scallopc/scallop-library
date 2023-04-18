import { useEffect, useRef, useState } from "react";
import { AppsContainer, MenuContainer } from "./styles";
import { menuOfItems as item } from "./menuOfItems";
import { MenuItems } from "./menuItems";

export default function AppMenu() {
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
      <MenuContainer onClick={() => setOpen(!open)}>
        <i className="fa-regular fa-bars"></i>
      </MenuContainer>

      {open && (
        <AppsContainer>
          {item?.map((menu, index) => {
            const nextLevel = 0;
            return (
              <MenuItems items={menu} key={index} nextLevel={nextLevel} />
            );
          })}
        </AppsContainer>
      )}
    </div>
  );
}
