import styled, { css } from "styled-components";
import { IHeading } from "./heading";

const typeHeading = {
  h1: css`
    font-size: 40px;
    line-height: 54px;
  `,

  h2: css`
    font-size: 32px;
    line-height: 44px;
  `,

  h3: css`
    font-size: 28px;
    line-height: 38px;
  `,

  h4: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  `,

  h5: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  `,

  h6: css`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  `,
};

const fontWeight = {
  bold: css`
    font-weight: 600;
  `,

  light: css`
    font-weight: 500; ;
  `,
};

const fontStyle = {
  italic: css`
    font-style: italic;
  `,

  initial: css`
    font-style: initial;
  `,
};

const textTransform = {
  uppercase: css`
    text-transform: uppercase;
    letter-spacing: 2px;
  `,

  initial: css`
    text-transform: initial;
  `,

  lowercase: css`
    text-transform: lowercase;
  `,
};

const textAlign = {
  center: css`
    text-align: center;
  `,

  initial: css`
    text-align: initial;
  `,

  end: css`
    text-align: end;
  `,
};


const typeText = {
  xsm: css`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
  `,

  sm: css`
    font-size: 12px;
    line-height: 18px;
  `,

  md: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  `,

  lg: css`
    font-size: 16px;
    line-height: 24px;
  `,
};

export const ContainerText = styled.div<any>`
  font-style: normal;
  font-weight: 400;
  cursor:  ${(props) => props.onClick ? 'pointer' : ''};
  
  ${(props) => props.typeText && typeText[props.typeText]}
  ${(props) => props.textTransform && textTransform[props.textTransform]}
  ${(props) => props.textAlign && textAlign[props.textAlign]}
  ${(props) => props.fontStyle && fontStyle[props.fontStyle]}
  ${(props) => props.fontWeight && fontWeight[props.fontWeight]}
`;

export const ContainerHeading = styled.div<any>`
  font-style: normal;
  font-weight: 700;
  cursor:  ${(props) => props.onClick ? 'pointer' : ''};

  ${(props) => props.typeHeading && typeHeading[props.typeHeading]}
  ${(props) => props.textTransform && textTransform[props.textTransform]}
  ${(props) => props.textAlign && textAlign[props.textAlign]}
  ${(props) => props.fontStyle && fontStyle[props.fontStyle]}
  ${(props) => props.fontWeight && fontWeight[props.fontWeight]}
`;
