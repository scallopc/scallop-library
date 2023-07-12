import styled from "styled-components";

export const PaginatorWrapper = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 20px;

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
          color: inherit;

          &:hover {
               background-color: ${(props) =>
                    props.theme.paginatorNumber.hover};
               color: ${(props) => props.theme.paginatorNumber.colorHover};
          }

          &.active {
               background-color: ${(props) =>
                    props.theme.paginatorNumber.activeBg};
               color: ${(props) => props.theme.paginatorNumber.activeColor};
          }
     }
`;
