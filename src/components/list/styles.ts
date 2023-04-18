import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  color: ${(props) => props.theme.default.color};
  background-color: ${(props) => props.theme.default.bgAlternative1};
  border-bottom: 1px solid ${(props) => props.theme.line.color};
  width: 50%;
  padding: 10px;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const IconCheck = styled(FontAwesomeIcon)`
  color: #0cab66;
  font-size: 16px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: ${(props) => props.theme.default.color};
  cursor: pointer;
`;


