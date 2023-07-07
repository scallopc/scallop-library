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
          background-color: #eceef1;
          color: #3e7bfa;
     }

     i {
     }
     span {
          font-size: 12px;
     }
`;
