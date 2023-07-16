import styled, { css } from "styled-components";

export const Container = styled.table`
     text-align: left;
     border-spacing: 0;
     padding: 10px;
     border-radius: 5px;
     max-width: 100%;
`;

export const HeaderCellTH = styled.th`
     font-weight: 700;
     color: ${(props) => props.theme.basicTable.ThColor};
     border: 0;
     background: ${(props) => props.theme.basicTable.ThBackground};
     border-width: 0 0 1px 0;
     padding: 1rem 1rem;
`;

export const HeaderCell = styled.div`
     display: flex;
     align-items: center;

     &.flexible {
          gap: 5px;
     }
`;

export const DataCellTD = styled.td`
     border: 1px solid ${(props) => props.theme.basicTable.border};
     border-width: 0 0 1px 0;
     padding: 1rem 1rem;
     font-size: 12px;
     // background: #333d57;
`;

export const IndentedCell = styled(DataCellTD)`
     ${(props) =>
          props.indentLevel &&
          css`
               padding-left: ${props.indentLevel * 20}px;
          `}
`;

export const IconExpander = styled.span`
     background: transparent;
     cursor: pointer;
     margin-right: 10px;
     padding: 5px;
     border-radius: 50%;
     width: 25px;
     height: 25px;
     font-size: 14px;
     display: flex;
     align-items: center;
     justify-content: center;

     &:hover,
     :focus {
          background: ${(props) => props.theme.basicTable.hover};
     }
`;

export const Image = styled.img`
     width: 50px;
`;
