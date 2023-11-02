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
     max-width: 500px;
`;

export const Icon = styled.i`
     font-size: 18px;
     border-radius: 100px;
`;

export const IconClose = styled.i`
     padding: 2px;
     border-radius: 50%;
     cursor: pointer;
     font-size: 20px;
`;

export const MsgContainer = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: 10px;
     font-weight: 400;
     font-size: 12px;
`;

export const ContentIconText = styled.div`
     display: flex;
     align-items: center;
`;

export const Content = styled.div`
     display: flex;
     gap: 10px;
     align-items: center;
     justify-content: space-between;
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
          border-left-color: #06c270;
          background-color: #e3fff1;

          ${Icon} {
               color: #06c270;
          }

          ${MsgContainer} {
               color: #1ecb80;
          }

          ${IconClose} {
               color: #1ecb80;
               &:hover {
                    background: #cef4e1;
               }
          }
     }

     &.error {
          border-left-color: #ff3b3b;
          background-color: #ffe6e6;

          ${Icon} {
               color: #ff3b3b;
          }

          ${MsgContainer} {
               color: #ef5656;
          }

          ${IconClose} {
               color: #ef5656;
               &:hover {
                    background: #fbcdcd;
               }
          }
     }

     &.info {
          border-left-color: #0063f7;
          background-color: #e5f0ff;

          ${Icon} {
               color: #0063f7;
          }

          ${MsgContainer} {
               color: #5590e9;
          }

          ${IconClose} {
               color: #5590e9;
               &:hover {
                    background-color: #d0e4ff;
               }
          }
     }

     &.warn {
          border-left-color: #ff8800;
          background-color: #fff8e6;

          ${Icon} {
               color: #ff8800;
          }

          ${MsgContainer} {
               color: #ec9f46;
          }

          ${IconClose} {
               color: #ec9f46;
               &:hover {
                    background-color: #fae9bd;
               }
          }
     }
`;
