import { IButton } from "./model";
import styled, { css } from "styled-components";

const primary = (props: IButton) => css`
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
     ${props.disabled && disabled}
`;

const outline = (props: IButton) => css`
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

     ${props.disabled && disabled}
`;

const danger = (props: IButton) => css`
     color: ${(props) => props.theme.outline.focus};
     background-color: #ff3b3b;
     border: none;
     &:hover {
          background-color: #de4747;
     }
     &:focus {
          background-color: #de4747;
     }

     ${props.disabled && disabled}
`;

const disabled = css`
     cursor: not-allowed;
     background: ${(props) => props.theme.disabled.background};
     color: ${(props) => props.theme.disabled.color};
     border: 1px solid ${(props) => props.theme.disabled.border};

     &:hover {
          background: ${(props) => props.theme.disabled.background};
          color: ${(props) => props.theme.disabled.color};
          border: 1px solid ${(props) => props.theme.disabled.border};
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
     border-radius: 4px;
     width: fit-content;
     transition: all 150ms linear;
     cursor: pointer;
     outline: none;
     ${(props) => props.danger && danger}
     ${(props) => props.primary && primary}
     ${(props) => props.outline && outline}
     ${(props) => props.disabled && disabled}
     ${(props) => props.sm && smallStyles}
     ${(props) => props.md && mediumStyles}
     ${(props) => props.lg && largeStyles}
`;

export const Span = styled.span`
     position: relative;
     top: 1px;
`;
