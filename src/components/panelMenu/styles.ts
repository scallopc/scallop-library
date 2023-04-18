import styled from "styled-components";

export const Icon = styled.i<any>`
  font-size: 16px;
  color: ${(props: any) => props.theme.menuOptions.color};
  padding: 5px 11px;

`;

export const IconsContainer = styled.div<any>`
  display: flex;
  gap: 5px;
`;

export const IconItem = styled.div<any>`
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props: any) => props.theme.menuOptions.bgHover};
  }

`;

export const IconsContainerBlock = styled(IconsContainer)`
  position: absolute;
  right: 20px;
  top: 20px;
  gap: 10px;
`;

export const ContainerOptions = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: absolute;
  z-index: 1;
  border-radius: 4px;
  padding: 4px 8px;
  color: ${(props: any) => props.theme.appMenu.color};
  background-color: ${(props: any) => props.theme.default.bgAlternative1};
  border: 1px solid ${(props: any) => props.theme.card.borderColor};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  width: max-content;
  right: 0;
  top: 33px;
`;

export const ItemContainerOptions = styled.div<any>`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-columns: 18px 1fr;
  gap: 2px;
  transition: all ease 0.2;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.default.bgAlternative1};
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => props.theme.default.color};

  &:hover {
    background-color: ${(props) => props.theme.default.disabled};
    color: ${(props) => props.theme.default.color};
  }

  i {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div<any>`
  color: ${(props: any) => props.theme.button.colorBtnText};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.button.borderBtnText};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 4px;
  width: fit-content;
  width: fit-content;
  padding: 8px 24px;
  height: 32px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  font-size: 12px;

  &:hover {
    background-color: ${(props) => props.theme.button.bgBtnPrimaryHover};
    color: ${(props) => props.theme.button.colorBtnPrimary};
    border: 1px solid transparent;
  }
`;
