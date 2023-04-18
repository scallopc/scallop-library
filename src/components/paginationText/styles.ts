import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IPaginationText } from "./paginationText";

export const ButtonItem = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: relative;
  background: transparent;
  border: 1px solid #8f90a629;
  border-radius: 50%;
  color: ${(props) => props.theme.button.bgBtnPrimary};
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: 0;
  }

  &:disabled {
    background: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input<any>`
  width: 20px;
  max-width: 30px;
  border: 0;
  box-shadow: none;
  color: ${(props) => props.theme.default.colorAlternative2};
  text-align: center;
  background: transparent;
  font-family: "Poppins";

  &::placeholder {
    color: #8f90a6;
    font-weight: 400;
    opacity: 1;
  }

  &:focus {
    outline: 0;
    box-shadow: 0;
  }

  &[type="number"] {
    appearance: textfield;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    appearance: none;
  }
`;

export const Content = styled.div`
  color: #8f90a6;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PaginationContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 290px;
  padding: 12px 16px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 12px;
`;
