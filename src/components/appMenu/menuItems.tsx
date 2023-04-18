import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { SubMenu } from "./subMenu";
import { AppItem, Icon } from "./styles";

export function MenuItems({ items, nextLevel }) {
    const [itemSubMenu, setItemSubMenu] = useState<any>(false);
    let ref = useRef<any>();

    useEffect(() => {
        const handler = (event: any) => {
            if (
                itemSubMenu &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setItemSubMenu(false);
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [itemSubMenu]);

    return (
        <div ref={ref}>
            {items.submenu ? (
                <>
                    <AppItem onClick={() => setItemSubMenu((prev) => !prev)}>
                        <Icon className={items.icon} />
                        <div className="flex flex-column gap-1">
                            {items.title}
                            <div className="text-xs">{items.description}</div>
                        </div>
                        {nextLevel > 0 ? (
                            <FontAwesomeIcon icon={faChevronRight} />
                        ) : (
                            ""
                        )}
                    </AppItem>
                    {/* {items.description && <div className="mt-2"><Line direction="horizontal"/></div>} */}
                    <SubMenu
                        nextLevel={nextLevel}
                        submenus={items.submenu}
                        itemSubMenu={itemSubMenu}
                    />
                </>
            ) : (
                <>
                    <AppItem>
                        <Icon className={items.icon} />
                        <div className="flex flex-column gap-1">
                            {items.title}
                            <span className="text-xs">{items.description}</span>
                        </div>
                    </AppItem>
                    {/* {items.description && <div className="mt-2"><Line direction="horizontal"/></div>} */}
                </>
            )}
        </div>
    );
}
