import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    color: ${(props) => props.theme.default.color};
    width: 100%;
`;
export const Content = styled.div`
    position: relative;
    display: flex;
    gap: 15px;
    border-bottom: 1px solid red;
    ${(props: any) =>
        props.styleContentActive &&
        styleContentActive[props.styleContentActive]}
`;

export const ContentBorder = styled.div`
    display: flex;
    margin-bottom: 3px;
    border-bottom: 1px solid ${(props) => props.theme.line.color};
`;

export const ContainerHeaderTab = styled.div`
    position: relative;
    top: 1px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 15px 5px;
    border-radius: 4px 4px 0 0;
    min-width: 110px;
    justify-content: center;
    cursor: pointer;
    ${(props) => props.styleTabActive && styleTabActive[props.styleTabActive]}

    &:hover {
        background-color: #3e7bfa14;
    }
`;

export const Title = styled.span`
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    min-width: 75px;
    width: max-content;
`;

export const IconCloseTab = styled.i`
    cursor: pointer;
    color: ${(props) => props.theme.default.color};
    border-radius: 100px;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        padding: 1px;
        border: 1px solid ${(props) => props.theme.line.color};
    }
`;

export const Body = styled.div`
    padding: 10px;
`;

const styleTabActive: any = {
    default: css`
        border-bottom: 1px solid
            ${(props: any) =>
                props.isActive ? props.theme.button.bgBtnPrimary : "none"};
    `,

    around: css`
        border-bottom: 1px solid
            ${(props: any) =>
                props.isActive
                    ? props.theme.default.bgAlternative1
                    : props.theme.line.color};
        border-top: 1px solid
            ${(props: any) =>
                props.isActive ? props.theme.button.bgBtnPrimary : "none"};
        border-right: 1px solid
            ${(props: any) =>
                props.isActive ? props.theme.button.bgBtnPrimary : "none"};
        border-left: 1px solid
            ${(props: any) =>
                props.isActive ? props.theme.button.bgBtnPrimary : "none"};
    `,
};

const styleContentActive = {
    around: css`
        border-bottom: 1px solid ${(props) => props.theme.line.color};
    `,
};
