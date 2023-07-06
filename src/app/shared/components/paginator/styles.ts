import styled from "styled-components";

export const PaginatorWrapper = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 20px;

     button {
          margin: 0 5px;
          padding: 5px 10px;
          background-color: #ccc;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-size: 16px;
     }

     button.active {
          background-color: #ff0000;
          color: #fff;
          font-weight: bold;
     }
`;
