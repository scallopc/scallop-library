import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
import { scroll } from "./scroll";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.default.background};
    color: ${(props) => props.theme.default.color};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    line-height: 20px;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  ${scroll}
`;
