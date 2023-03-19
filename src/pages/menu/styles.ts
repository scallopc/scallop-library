import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenuLateral = styled.div`
    height: 100%;
    background: ${(props) => props.theme.default.bgAlternative1};
`;

export const MenuContainer = styled.div`
    background: ${(props) => props.theme.default.bgAlternative1};
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 215px;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    box-shadow: 7px 1px 6px -2px #e3e3e3;
    -webkit-box-shadow: 7px 1px 6px -2px #e3e3e3;
    -moz-box-shadow: 7px 1px 6px -2px #e3e3e3;
`;

export const H4 = styled(Link)`
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme.default.color};

    &:hover {
        color: ${(props) => props.theme.button.bgBtnPrimary};
    }
`;
