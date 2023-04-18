import styled, { css } from "styled-components";

export const MenuContainer = styled.div<any>`
  position: relative;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.appMenu.color};
  border-radius: 4px;
  padding: 4px;
  width: 26px;
  height: 26px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.default.disabled};
    color: ${(props) => props.theme.default.color};
  }

  div:active {
    background-color: ${(props) => props.theme.default.disabled};
    color: ${(props) => props.theme.default.color};
  }
`;

export const AppsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 285px;
  position: absolute;
  transition: all ease 0.2;
  z-index: 1;
  background-color: ${(props) => props.theme.default.bgAlternative1};
  border: 1px solid ${(props) => props.theme.default.disabled};
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  padding: 24px;
`;

export const AppItem = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  width: 110px;
  height: 105px;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  gap: 10px;
  color: ${(props) => props.theme.default.colorAppMenu};

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.default.disabled} !important;
  }

  &:first-child {
    background-color: ${(props) => props.theme.default.disabled};
  }

  &:last-child {
    background-color: initial;
  }
`;

export const Icon = styled.i`
  font-size: 30px;
  padding: 0 10px;
`;

export const types = {
  show: css`
    right: -360px;
    top: 0;
    display: flex;
    gap: 15px;
    flex-direction: column;

    ${AppItem} {
      flex-direction: row;
      gap: 10px;
      width: auto;
      align-items: center;
      width: 300px;
      //border-color: blue;
    }
  `,
};

export const SubMenuApp = styled(AppsContainer)<any>`
  position: absolute;
  font-size: 14px;
  z-index: 1;
  display: none;
  ${(props) => props.type && types[props.type]}
  width: 350px;
  gap: 10px;

  ${AppItem} {
  }
`;

export const Teste = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.line.color};

  &:last-of-type {
    border-bottom: 0;
  }
`;
