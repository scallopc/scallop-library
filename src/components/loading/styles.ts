import styled, { css } from "styled-components";

export const Container = styled.div<any>`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: block;

  ${(props) =>
    props.blocked === false &&
    css`
      display: none;
    `}
`;

export const Block = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  transition-duration: 0.2s;
  background-color: #00000014;
`;
