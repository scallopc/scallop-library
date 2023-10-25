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
    min-width: 32px;
    height: 32px;
    font-size: 12px;

    ${LabelActive} {
      right: 0;
      bottom: 0;
    }
  `,

  medium: css`
    width: 42px;
    min-width: 42px;
    height: 42px;
    font-size: 14px;

    ${LabelActive} {
      right: 1px;
      bottom: 2px;
    }
  `,

  large: css`
    width: 62px;
    min-width: 62px;
    height: 62px;
    font-size: 20px;

    ${LabelActive} {
      right: 5px;
      bottom: 4px;
      width: 12px;
      height: 12px;
    }
  `,

  xlarge: css`
    width: 128px;
    min-width: 128px;
    height: 128px;
    font-size: 30px;
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
  cursor:  ${(props) => (props.onClick ? "pointer" : "")};
`;

export const Image = styled.img<IAvatar>`
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  overflow: hidden;
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

export const HoverChangeImage = styled.label`
  position: absolute;
  background: #b1b4bb;
  color: #fff;
  right: 0;
  bottom: 10px;
  font-size: 18px;
  border-radius: 50px;
  padding: 8px;
  border: 2px solid #fff;
  cursor: pointer;
`;
