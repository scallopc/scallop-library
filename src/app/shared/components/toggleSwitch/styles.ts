import styled from "styled-components";

export const SwitchWrapper = styled.label<{ checked: boolean }>`
     display: inline-block;
     width: 40px;
     height: 20px;
     border-radius: 10px;
     background-color: ${(props) =>
          props.checked
               ? props.theme.toggle.active
               : props.theme.toggle.inactive};
     position: relative;
     cursor: pointer;
`;

export const SwitchSlider = styled.span<{ checked: boolean }>`
     position: absolute;
     top: 2px;
     left: 2px;
     width: 16px;
     height: 16px;
     border-radius: 50%;
     background-color: ${(props) => props.theme.toggle.slider};
     transition: transform 0.2s;
     transform: ${({ checked }) =>
          checked ? "translateX(20px)" : "translateX(0)"};
`;

//${(props) => props.danger && danger}
