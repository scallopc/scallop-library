import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledLabel = styled.label<any>`
  position: relative;
  width: fit-content;
`;

export const Span = styled.span<any>`
  cursor: pointer;
  display: flex;
  border-radius: 100px;
  position: relative;
  width: 32px;
  height: 16px;
  background: ${(props) => props.theme.toggle.colorDisabled};

  &::before {
    content: "";
    position: absolute;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
    width: 12px;
    height: 12px;
    top: 2px;
    left: 2px;
  }

  &:active::before {
    width: 15px;
  }
`;

export const Input = styled.input`
  position: absolute;
  display: none;

  &:checked + span {
    background: ${(props) => props.theme.toggle.colorActive};

    &:before {
      left: calc(100% - 14px);
    }
  }
`;