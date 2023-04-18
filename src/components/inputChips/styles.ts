import styled, { css } from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
`;

export const InputArea = styled.div<any>`
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
  border: 1px solid ${(props) => props.theme.input.colorAlternative1};
  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.input.borderHover};
  }
`;

export const Label = styled.label<any>`
  color: ${(props) => props.theme.input.color};
  font-size: 12px;
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

export const Error = styled.span<any>`
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
`;


//tags
export const ContainerChips = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  gap: 4px;
  border: 1px solid ${(props) => props.theme.input.disabled};
  border-radius: 100px;
  text-transform: uppercase;
  width: fit-content;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 4px;
  white-space: nowrap;
  color: ${(props) => props.color };
  background-color: ${(props) => props.bgColor };
`;

export const Span = styled.span<any>`
  font-size: 12px;
  position: relative;
  top: 1px;
`;


export const Icon = styled.i<any>`
  cursor: pointer;
  font-size: 14px;
`;
