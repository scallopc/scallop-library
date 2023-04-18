import { error } from "console";
import styled, { css } from "styled-components";
import { InputProps } from "./input";

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;



export const InputArea = styled.div<InputProps>`
  background: ${(props) => props.theme.input.bgInput};
  position: relative;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 0 10px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  max-width: 100%;
  height: 40px;
  outline: none;
  transition: ease-in-out 0.2s;
  font-family: "Poppins";
  border: 1px solid ;
  border-color: ${(props) => props.error ? 'red' : props.theme.input.colorAlternative1};

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.input.borderHover};
  }
  ${(props) => props.disabled && disabled}

`;

export const InputContainer = styled.input<any>`
  width: 100%;
  padding: 0;
  outline: none;
  border: 0;
  grid-column: 2;
  grid-row: 1;
  color: ${(props) => props.theme.input.color};
  font-family: "Poppins";
  font-size: 12px;
  background: ${(props) => props.theme.input.bgInput};
  position: relative;
  top: 1px;
`;

export const Label = styled.label<any>`
  color: ${(props) => props.theme.input.color};
  font-size: 12px;

  i {
    color: #ff3b3b;
    font-size: 8px;
    position: relative;
    top: -3px;
    left: 5px;
  }
`;


export const IconLeft = styled.i<any>`
  font-size: 16px;
  padding-right: 8px;
  color: ${(props) => props.theme.input.icon.color};
`;

export const IconRight = styled.i`
  font-size: 16px;
  padding-left: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.input.icon.color};
`;

export const Error = styled.span<InputProps>`
  color: ${(props) => props.theme.input.color};
  position: relative;
  font-size: 12px;

  span::before {
    content: "⮿";
    font-size: 14px;
    color: #ff3b3b;
    position: relative;
    top: 1px;
    margin-right: 4px;
  }

  ${(props) => props.error && disabled}
`;

const disabled = css`
  cursor: not-allowed;
  background: ${(props) => props.theme.input.colorAlternative1};
  color: ${(props) => props.theme.input.disabled};

  ${InputContainer} {
    background: ${(props) => props.theme.input.colorAlternative1};
    cursor: not-allowed;
    color: ${(props) => props.theme.input.disabled};
  }

  &:hover {
    border: 1px solid transparent;
  }
`;

export const baseButtonMixin = css`
  background: none;
  border: none;
  padding: 0;
`;

export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
`;

//AutoCompleteArea
export const AutoCompleteArea = styled.div<any>`
  background: ${(props) => props.theme.input.bgInput};
  width: 100%;
  position: absolute;
  top: 45px;
  left: 0;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const AutoCompleteContainer = styled.div`
  padding: 5px;
  margin: 5px;
  overflow-y: auto;
  max-height: 180px;
  max-width: 280px;
`;

export const AutoCompleteItemButton = styled.div`
  ${baseButtonMixin}
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  line-height: 32px;
  text-align: left;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.default.color};

  &:active,
  &:hover {
    color: #fff;
    outline: none;
  }
`;

export const AutoCompleteItem = styled.div`
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => props.theme.input.bgAutoCompleteHover};
  }
`;

export const AutoCompleteItemWithTag = styled.div`
  background: ${(props) => props.theme.input.bgInput};
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.input.disabled};
  color: ${(props) => props.theme.default.color};
  font-size: 14px;
  font-family: "Poppins", sans-serif;

  &:last-child {
    border-bottom: none;
  }
`;

export const AutoCompleteHeader = styled.div`
  display: flex;
`;

export const NoFound = styled(AutoCompleteContainer)`
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const ItemDescription = styled.div`
  color: ${(props) => props.theme.default.color};
  opacity: 0.5;
`;

//tags
export const ContainerBadge = styled.div`
  display: flex;
  gap: 4px;
  max-width: 100%;
  overflow: hidden;
  height: 25px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.input.disabled};
  border-radius: 2px;
  white-space: nowrap;
  margin-top: 10px;
`;
