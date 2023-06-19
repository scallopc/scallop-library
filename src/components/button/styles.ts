import { IButton } from "./button";
import styled, { css } from "styled-components";

const ButtonVariant = {
     primary: css`
          color: ${(props) => props.theme.default.buttonPrimaryColor};
          background-color: ${(props) => props.theme.default.buttonPrimaryBg};
          border: none;
          &:hover {
               background-color: ${(props) =>
                    props.theme.default.buttonPrimaryHover};
          }
          &:focus {
               background-color: ${(props) =>
                    props.theme.default.buttonPrimaryFocus};
          }
     `,
     outline: css`
          color: ${(props) => props.theme.default.buttonPrimaryColor};
          background-color: transparent;
          border: 1px solid ${(props) => props.theme.default.buttonPrimaryBg};

          &:hover {
               background-color: ${(props) =>
                    props.theme.default.buttonPrimaryHover};
               color: ${(props) => props.theme.buttonPrimaryBg};
               border: 1px solid transparent;
          }

          &:focus {
               background-color: ${(props) =>
                    props.theme.default.buttonPrimaryFocus};
               color: ${(props) => props.theme.default.buttonPrimaryColor};
          }
     `,
     text: css`
          color: ${(props) => props.theme.default.buttonPrimaryColor};
          background-color: transparent;
          border: 1px solid ${(props) => props.theme.default.buttonBorder};

          &:hover {
               background-color: ${(props) =>
                    props.theme.default.buttonPrimaryHover};
               color: ${(props) => props.theme.default.buttonPrimaryColor};
               border: 1px solid transparent;
          }
     `,
     danger: css`
          color: ${(props) => props.theme.default.buttonPrimaryColor};
          background-color: #ff3b3b;
          border: none;
          &:hover {
               background-color: #de4747;
          }
          &:focus {
               background-color: #de4747;
          }
     `,
};

const disabled = css`
     cursor: not-allowed;
     background: ${(props) => props.theme.default.buttonDisabled};
     color: ${(props) => props.theme.default.buttonPrimaryHover};
     border: 1px solid ${(props) => props.theme.default.buttonDisabled};

     &:hover {
          background: ${(props) => props.theme.default.buttonDisabled};
          color: ${(props) => props.theme.default.buttonPrimaryHover};
          border: 1px solid ${(props) => props.theme.default.buttonDisabled};
     }
`;

const danger = css`
     color: ${(props) => props.theme.default.buttonPrimaryColor};
     background-color: #ff3b3b;
     border: none;
     &:hover {
          background-color: #de4747;
     }
     &:focus {
          background-color: #de4747;
     }
`;

export const Container = styled.button<IButton>`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 4px;
     font-weight: 500;
     letter-spacing: 0.2px;
     border-radius: 4px;
     width: fit-content;
     padding: ${(props) =>
               props.size === "small"
                    ? "6px"
                    : props.size === "medium"
                    ? "8px"
                    : "10px"}
          24px;
     height: ${(props) =>
          props.size === "small"
               ? "24px"
               : props.size === "medium"
               ? "32px"
               : "40px"};
     cursor: pointer;
     outline: none;
     transition: all 0.2s;
     font-size: ${(props) =>
          props.size === "small"
               ? "10px"
               : props.size === "medium"
               ? "12px"
               : "14px"};
     ${(props) => props.variant && ButtonVariant[props.variant]}
     ${(props) => props.disabled && disabled}
`;

export const Span = styled.span`
     position: relative;
     top: 1px;
`;
