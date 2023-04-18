import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const ButtonItem = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #8f90a6;
  font-weight: 500;
  text-decoration: none;
  font-family: "Poppins";

  &:focus {
    outline: 0;
  }

  &:hover, &:active {
    background-color: ${(props) => props.theme.button.bgHover};
    color: ${(props) => props.theme.button.bgBtnPrimary};
  }
`;
export const active = css`
  background-color: ${(props) => props.theme.button.bgHover};
  color: ${(props) => props.theme.button.bgBtnPrimary};
`;

export const Separator = styled.div`
  &::before {
    content: "...";
    font-size: 18px;
    color: ${(props) => props.theme.default.colorAlternative2};
    position: relative;
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme.default.colorAlternative2};
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Poppins";
  width: 290px;
  padding: 12px 16px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 12px;
  color: ${(props) => props.theme.button.bgBtnPrimary};
  cursor: pointer;
`;
