import styled from "styled-components";
import { IMenu } from "./appSwitch";

export const MenuContainer = styled.i`
  position: relative;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.default.colorAlternative2};
  //border: 1px solid ${(props) => props.theme.default.disabled};
  border-radius: 4px;
  padding: 5px;

  &:hover, &:active {
    background-color: ${(props) => props.theme.default.disabled};
    color: ${(props) => props.theme.default.color};
  }
`;

export const AppsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 420px;
  position: absolute;
  transition: all ease 0.2;
  top: 50px;
  z-index: 2;
  background-color: ${(props) => props.theme.default.bgAlternative1};
  border: 1px solid ${(props) => props.theme.default.disabled};
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  padding: 24px;
`;

export const AppItem = styled.div<IMenu>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 500;
  width: 110px;
  height: 105px;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  span {
text-align: center;
  }

  &:hover, &:active {
    background-color: ${(props) => props.theme.default.disabled};
  }
`;

export const Icon = styled.i<any>`
  font-size: 40px;
  padding: 8px;
  color: ${(props) => props.iconColors };
`;

export const IconFak = styled.i<any>`
  font-size: 40px;
  padding: 8px;
  color: ${(props) => props.iconColors };
`;
