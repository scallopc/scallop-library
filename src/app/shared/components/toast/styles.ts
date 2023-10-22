import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
     position: fixed;
     top: 20px;
     right: 20px;
     padding: 15px;
     z-index: 1000;
     display: flex;
     flex-direction: column;
     gap: 15px;
`;

export const Icon = styled.i`
     font-size: 18px;
     border-radius: 100px;
`;

export const Content = styled.div`
     display: flex;
     gap: 10px;
     align-items: center;
     justify-content: space-between;
     background-color: #fff;
     padding: 15px;
     border-radius: 5px;
     z-index: 1000;
     transform: translateY(-500px);
     transition: 0.4s;
     border-left: 4px solid;

     &.show {
          transform: translateY(0px);
     }

     &.success {
          border-left-color: green;
          ${Icon} {
               color: green;
          }
     }

     &.error {
          border-left-color: red;
          ${Icon} {
               color: red;
          }
     }

     &.info {
          border-left-color: blue;
          ${Icon} {
               color: blue;
          }
     }

     &.warn {
          border-left-color: yellow;
          ${Icon} {
               color: yellow;
          }
     }
`;

export const TextContainer = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: 10px;

     .summary {
          font-weight: 600;
          font-size: 14px;
     }

     .detail {
          font-weight: 400;
          font-size: 12px;
     }
`;

export const ContentIconText = styled.div`
     display: flex;
`;

export const IconClose = styled.i`
     padding: 3px 5px;
     border-radius: 50%;
     cursor: pointer;

     &:hover {
          background: antiquewhite;
     }
`;
