import { MenuItems } from "./menuItems";
import { SubMenuApp } from "./styles";

export function SubMenu({ submenus, itemSubMenu, nextLevel }) {
  nextLevel = nextLevel + 1;

  return (
    <>
      {itemSubMenu && (
        <SubMenuApp type="show">
          {submenus?.map((submenu, index) => (
            <MenuItems items={submenu} key={index} nextLevel={nextLevel} />
          ))}
        </SubMenuApp>
      )}
    </>
  );
}
