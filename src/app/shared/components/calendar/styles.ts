import styled from "styled-components";

export const Wrapper = styled.div`
     width: 450px;
     background: #fff;
     border-radius: 10px;
     box-shadow: 0 15px 40px #00000026;

     header {
          display: flex;
          align-items: center;
          padding: 25px 30px 10px;
          justify-content: space-between;

          P {
               font-size: 1.45rem;
               font-weight: 500;
          }
     }
`;

export const Icons = styled.div`
     display: flex;

     i {
          height: 38px;
          width: 38px;
          margin: 0 1px;
          cursor: pointer;
          color: #878787;
          display: flex;
          border-radius: 50%;
          align-items: center;
          justify-content: center;

          :hover {
               background: #f2f2f2;
          }
     }
`;

export const CalendarContent = styled.div`
     padding: 20px;

     li {
          color: #333;
          width: calc(100% / 7);
          font-size: 1.07rem;

          &:active {
               color: #fff;
          }
          &:inactive {
               color: #aaa;
          }
          &::before {
               position: absolute;
               content: "";
               left: 50%;
               top: 50%;
               height: 40px;
               width: 40px;
               z-index: -1;
               border-radius: 50%;
               transform: translate(-50%, -50%);
          }
     }

     ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          text-align: center;

          li {
               font-weight: 500;
               cursor: default;
          }
     }
`;
