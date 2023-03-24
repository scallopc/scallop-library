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
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.scroll.thumb};
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.scroll.thumbHover};
    }
`;
