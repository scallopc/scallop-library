import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const scroll = css`
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: 0;
        border-radius: 10px;
        background: aqua;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: aquamarine;
    }
`;
