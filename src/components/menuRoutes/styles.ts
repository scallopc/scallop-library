import styled from "styled-components";

export const IconContainer = styled.i`
    font-size: 18px;
`;

export const Container = styled.div`
    width: fit-content;
    min-height: 30px;
    display: flex;
    gap: 8px;
    align-items: center;
    transition: all 0.1s ease;
    padding-left: 5px;
    color: ${(props) => props.theme.default.color};
    font-size: 14px;

    &.active {
        border-left: 4px solid #5b8def;
        border-radius: 2px;
    }
`;
