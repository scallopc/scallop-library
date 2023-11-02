import styled from "styled-components";

export const PaginatorTextWrapper = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 12px 16px;
     gap: 10px;

     button {
          margin: 0 5px;
          padding: 5px 10px;
          background-color: transparent;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 12px;
          width: 36px;
          height: 36px;
          background-color: ${(props) => props.theme.paginatorText.background};
          box-shadow: 0 0 4px 0px #b5b1b145;

          &.disabled {
               cursor: not-allowed;
               opacity: 0.3;
               &:hover {
                    background-color: ${(props) =>
                         props.theme.paginatorText.background};
               }
          }

          &:hover {
               // transition: all 2s ease-in;
               background-color: ${(props) => props.theme.paginatorText.hover};
               color: ${(props) => props.theme.paginatorText.hoverColor};
          }
     }

     i {
          color: ${(props) => props.theme.paginatorText.color};
          font-weight: 600;

          &.bi::before,
          [class^="bi-"]::before,
          [class*=" bi-"]::before {
               font-weight: 600 !important;
          }
     }

     span {
          font-size: 12px;
     }
`;
