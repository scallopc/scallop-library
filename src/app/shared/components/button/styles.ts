import { IButton } from "./buttons.model";
import styled, { css } from "styled-components";

// Estilos para os diferentes tipos
const primary = (props: IButton) => css`
     color: ${(props) => props.theme.primary.color};
     background-color: ${(props) =>
          props.disabled
               ? props.theme.primary.disabled
               : props.theme.primary.background};
     border: none;
     transition: all 250ms linear;
     &:hover {
          background-color: ${(props) =>
               props.disabled
                    ? props.theme.primary.disabled
                    : props.theme.primary.hover};
     }
     &:focus {
          background-color: ${(props) => props.theme.primary.focus};
     }
`;

const outline = (props: IButton) => css`
     color: ${(props) =>
          props.disabled
               ? props.theme.outline.disabled
               : props.theme.outline.color};
     background-color: transparent;
     border: 1px solid
          ${(props) =>
               props.disabled
                    ? props.theme.outline.disabled
                    : props.theme.outline.border};

     &:hover {
          background-color: ${(props) =>
               props.disabled ? "transparent" : props.theme.outline.hover};
          color: ${(props) =>
               props.disabled
                    ? props.theme.outline.disabled
                    : props.theme.outline.colorHover};
          border: 1px solid
               ${(props) =>
                    props.disabled
                         ? props.theme.outline.disabled
                         : "transparent"};
     }

     &:focus {
          background-color: ${(props) => props.theme.outline.focus};
          color: ${(props) => props.theme.outline.colorHover};
     }
`;

const text = (props: IButton) => css`
     color: ${(props) =>
          props.disabled ? props.theme.text.disabled : props.theme.text.color};
     background-color: transparent;

     &:hover {
          background-color: ${(props) =>
               props.disabled ? "transparent" : props.theme.text.hover};
          color: ${(props) =>
               props.disabled
                    ? props.theme.text.disabled
                    : props.theme.text.colorHover};
     }

     &:focus {
          background-color: transparent;
          border: 1px solid ${(props) => props.theme.text.disabled};
     }
`;

const danger = (props: IButton) => css`
     color: ${(props) => props.theme.text.focus};
     background-color: #ff3b3b;
     border: none;
     &:hover {
          background-color: #de4747;
     }
     &:focus {
          background-color: #de4747;
     }
`;

// Estilos para os diferentes tamanhos
const smallStyles = (props: IButton) => css`
     padding: 6px 24px;
     height: 24px;
     font-size: 10px;
`;

const mediumStyles = (props: IButton) => css`
     padding: 8px 24px;
     height: 32px;
     font-size: 14px;
`;

const largeStyles = (props: IButton) => css`
     padding: 10px 24px;
     height: 40px;
     font-size: 14px;
`;

export const Container = styled.button<IButton>`
     display: ${(props) =>
          props.label && (props.isLoading || props.icon) ? "flex" : "block"};
     align-items: center;
     justify-content: center;
     gap: 4px;
     font-weight: 500;
     letter-spacing: 0.2px;
     border-radius: ${(props) => (props.rounded ? "100px" : "4px")};
     width: fit-content;
     transition: all 150ms linear;
     cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
     outline: none;
     ${(props) => props.danger && danger}
     ${(props) => props.primary && primary}
     ${(props) => props.outline && outline}
     ${(props) => props.text && text}
     ${(props) => props.sm && smallStyles}
     ${(props) => props.md && mediumStyles}
     ${(props) => props.lg && largeStyles}
`;
