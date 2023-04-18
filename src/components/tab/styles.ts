import styled, { css } from "styled-components";

export const BorderFull = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.button.bgBtnPrimary};
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
`;

export const Title = styled.span`
    display: flex;
    min-width: 75px;
    width: max-content;
`;

export const HeaderTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    font-size: 12px;
    font-weight: 600;
    padding: 10px 10px 5px;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.button.bgBtnPrimary};
    height: 40px;

    &.active-border {
        border: 1px solid ${(props) => props.theme.button.bgBtnPrimary};
        border-bottom: 0;
    }

    &:hover {
        transition: 1s ease;
        background-color: #3e7bfa14;
    }
`;

export const TitleStaticCenter = styled(Title)`
    justify-content: center;
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
