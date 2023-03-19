import styled, { css } from "styled-components";
import { IAvatar } from "./avatar";

export const LabelActive = styled.div<IAvatar>`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  background-color: #c4c4c4;
  position: absolute;
  ${(props) => props.active && onActive[props.active]}
`;

const size = {
  small: css`
    width: 32px;
    height: 32px;
    font-size: 12px;

    ${LabelActive} {
      right: 0;
      bottom: 0;
    }
  `,

  medium: css`
    width: 42px;
    height: 42px;
    font-size: 14px;

    ${LabelActive} {
      right: 1px;
      bottom: 2px;
    }
  `,

  large: css`
    width: 62px;
    height: 62px;
    font-size: 20px;

    ${LabelActive} {
      right: 5px;
      bottom: 4px;
      width: 12px;
      height: 12px;
    }
  `,
};

const onActive = {
  off: css`
    background-color: #c4c4c4;
  `,

  on: css`
    background-color: #06c270;
  `,
};

export const Container = styled.div<IAvatar>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.2px;
  border-radius: 50%;
  background-color: #ccddff;
  ${(props) => props.size && size[props.size]}
`;

export const Image = styled.img<IAvatar>`
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
`;

export const Initials = styled.span<IAvatar>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
`;
