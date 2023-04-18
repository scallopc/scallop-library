import styled, { css } from "styled-components";

const severity:any = {
  info: css`
    color: #0063F7;
    background-color: #e5f0ff;
    border: none;
  `,
  success: css`
    color: #05a660;
    background-color: #E3FFF1;
    border: none;
  `,
  alert: css`
    color: #ff8800;
    background-color: #E3FFF1;
    border: none;
  `,
  danger: css`
    color:#e73b3b;
    background-color: #ffe6e6;
    border: none;
  `,
  primary: css`
    color: #3E7BFA;
    background-color: #FAFAFC;
    border: 1px solid #e4e4eb;
  `,

};

export const ContainerBadge = styled.div<any>`
  position: relative;
  border-radius: 100px;
  text-transform: uppercase;
  width: fit-content;
  padding: 2px 8px;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 4px;
  ${(props) => props.severity && severity[props.severity]}
`;

export const Label = styled.label`
  font-size: 12px;
  position: relative;
  top: 1px;
`;
