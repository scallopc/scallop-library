import { useEffect, useRef, useState } from "react";
import { ContainerMenuOptions } from "../containerMenuOptions";
import { IMenuIconOptions } from "../menuOptions";
import { ButtonContainer, Icon, IconItem, IconsContainer } from "../styles";

export function ButtonMenu({
  listBtn,
  type,
  label,
  idGroup,
}: IMenuIconOptions) {
  const [openbtnList, setOpenBtnList] = useState(false);
  let ref = useRef<any>(null);

  const handlerClickOutside = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      setOpenBtnList(false);
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
    <ButtonContainer
      type={type}
      className="relative"
      onClick={() => setOpenBtnList(!openbtnList)}
    >
      {label}
      <i className="fa-solid fa-chevron-down" />
      <div ref={ref}>
        {listBtn?.map((item: any, i: any) => {
          return (
            <ContainerMenuOptions
              idGroup={idGroup}
              active={openbtnList}
              key={i}
              options={listBtn}
              close={() => setOpenBtnList(false)}
            />
          );
        })}
      </div>
    </ButtonContainer>
  );
}
