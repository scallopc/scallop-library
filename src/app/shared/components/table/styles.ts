import styled, { css } from "styled-components";

export const Container = styled.table`
     text-align: left;
     border-spacing: 0;
     padding: 10px;
     border-radius: 5px;
`;

export const HeaderCell = styled.th`
     font-weight: 700;
     color: #343a40;
     border: 1px solid #dee2e6;
     border-width: 0 0 1px 0;
     padding: 1rem 1rem;
`;

export const DataCell = styled.td`
     border: 1px solid #dee2e6;
     border-width: 0 0 1px 0;
     padding: 1rem 1rem;
     font-size: 12px;
`;

export const IndentedCell = styled.td`
     border: 1px solid #dee2e6;
     border-width: 0 0 1px 0;
     font-size: 12px;
     ${(props) =>
          props.indentLevel &&
          css`
               padding-left: ${props.indentLevel * 20}px;
          `}
`;

export const Image = styled.img`
     width: 50px;
`;
