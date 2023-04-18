import styled from "styled-components";

export const Container = styled.table`
  text-align: left;
  border-spacing: 0;
  font-size: 12px;
  padding: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.default.bgAlternative1};

  td {
    padding: 8px 0;
    border-top: 1px solid ${(props) => props.theme.line.color};
  }

  th {
    padding: 8px 0;
  }
`;

export const Image = styled.img`
  width: 50px;
`;
