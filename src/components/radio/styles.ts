import styled from "styled-components";

export const Label = styled.label<any>`
  display: flex;
  gap: 8px;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  
  ${({ disabled }) =>
    disabled
      ? `
    cursor: not-allowed;
    color: ${(props) => props.theme.default.colorDisabled};
  `
      : ` cursor: pointer;
  color: ${(props) => props.theme.default.color};`}

`;

export const RadioButton = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => props.theme.toggle.colorActive};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin: 3px;
  }

  :checked {
    ::after {
      background-color: ${(props) => props.theme.toggle.colorActive};
    }
    :hover {
      ::after {
        background-color: ${(props) => props.theme.toggle.colorActive};
      }
    }
  }

  :hover {
    ::after {
      background-color: ${(props) => props.theme.toggle.colorActive};
    }
  }

  :disabled {
    cursor: not-allowed;
    border: 1px solid ${(props) => props.theme.toggle.colorDisabled};
    background: transparent;
    color: ${(props) => props.theme.toggle.colorDisabled};
    
    :hover {
      ::after {
        background-color: transparent;
      }
    }

    :checked {
      ::after {
        background-color: ${(props) => props.theme.toggle.colorDisabled};
      }
    }
  }
`;
