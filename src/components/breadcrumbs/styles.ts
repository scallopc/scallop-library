import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  width: auto;
  padding: 5px;
`;

export const Span = styled.span`
  display: flex;
  gap: 5px;
  font-size: 12px;
  align-items: center;
  color: ${(props) => props.theme.default.color};
  font-weight: 400;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    text-decoration: underline;
  }

  &:last-child {
    color: ${(props) => props.theme.default.colorAlternative2};
    //color: #28293d;
    font-weight: 500;
    cursor: initial;

    .icon-chevron {
      display: none;
    }

    :hover {
      text-decoration: none;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;
