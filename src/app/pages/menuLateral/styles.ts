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
    box-shadow: 11px 2px 4px 0px ${(props) => props.theme.default.shadow};
    -webkit-box-shadow: 1px 2px 4px 0px ${(props) => props.theme.default.shadow};
    -moz-box-shadow: 1px 2px 4px 0px ${(props) => props.theme.default.shadow};

    z-index: 1;
    background: antiquewhite;
    top: 55px;
    
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
