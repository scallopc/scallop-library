import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenuLateral = styled.div`
    height: 100%;
    color: ${(props) => props.theme.default.color};
`;

export const MenuContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 215px;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    box-shadow: 7px 1px 6px -2px ${(props) => props.theme.default.lowColor};
    -webkit-box-shadow: 7px 1px 6px -2px ${(props) => props.theme.default.lowColor};
    -moz-box-shadow: 7px 1px 6px -2px ${(props) => props.theme.default.lowColor};
`;

export const H4 = styled(Link)`
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    color: aqua;

    &:hover {
        color: red;
    }
`;
