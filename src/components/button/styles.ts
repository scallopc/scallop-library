import { IButton } from "./button";
import styled, { css } from "styled-components";

const ButtonVariant = {
     primary: css`
          color: ${(props) => props.theme.primary.color};
          background-color: ${(props) => props.theme.primary.background};
          border: none;
          transition: all 250ms linear;
          &:hover {
               background-color: ${(props) => props.theme.primary.hover};
          }
          &:focus {
               background-color: ${(props) => props.theme.primary.focus};
          }
     `,
     outline: css`
          color: ${(props) => props.theme.outline.color};
          background-color: transparent;
          border: 1px solid ${(props) => props.theme.outline.border};

          &:hover {
               background-color: ${(props) => props.theme.outline.hover};
               color: ${(props) => props.theme.outline.colorHover};
               border: 1px solid transparent;
          }

          &:focus {
               background-color: ${(props) => props.theme.outline.focus};
               color: ${(props) => props.theme.outline.colorHover};
          }
     `,
};

// const disabled = css`
//      cursor: not-allowed;
//      background: ${(props) => props.theme.buttonPrimary.disabled};
//      color: ${(props) => props.theme.buttonPrimary.hover};
//      border: 1px solid ${(props) => props.theme.buttonPrimary.disabled};

//      &:hover {
//           background: ${(props) => props.theme.buttonPrimary.disabled};
//           color: ${(props) => props.theme.buttonPrimary.hover};
//           border: 1px solid ${(props) => props.theme.buttonPrimary.disabled};
//      }
// `;

const danger = css`
     color: ${(props) => props.theme.buttonPrimary.color};
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
     transition: all 150ms linear;
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
     font-size: ${(props) =>
          props.size === "small"
               ? "10px"
               : props.size === "medium"
               ? "12px"
               : "14px"};
     ${(props) => props.variant && ButtonVariant[props.variant]}
`;

export const Span = styled.span`
     position: relative;
     top: 1px;
`;
