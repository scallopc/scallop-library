import styled, { css } from "styled-components";

export const Image = styled.img<any>`
  max-width: 100%;
  height: 100%;
  ${(props) => props.size && sizeImage[props.size]}
`;

const sizeImage = {
  small: css`
    width: 70px;
  `,

  medium: css`
    width: 90px;
  `,

  large: css`
    width: 100px;
  `,
};
