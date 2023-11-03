import styled from "styled-components";

export const IconContainer = styled.i`
     font-size: 18px;
`;

export const InProgress = styled.span`
    background-color: #3060f0;
    width: 6px;
    height: 6px;
    border-radius: 50px;
`;

export const Container = styled.div`
     width: fit-content;
     min-height: 30px;
     display: flex;
     gap: 8px;
     align-items: center;
     transition: all 0.1s ease;
     padding-left: 5px;
     color: ${(props: any) => props.theme.default.color};
     font-size: 14px;

     &.active {
          border-left: 4px solid #3060f0;
          border-radius: 2px;
     }
`;
