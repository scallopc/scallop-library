import styled from "styled-components";

export const ContainerPanel = styled.div`
     display: flex;
     justify-content: space-between;
     gap: 15px;
     background: antiquewhite;
     padding: 10px 15px;
     font-size: 14px;
     margin-bottom: 6px;
     border-radius: 4px;
     cursor: pointer;
`;

export const Header = styled.span`
     font-weight: 600;
     display: flex;
     justify-content: space-between;
     background-color: ${(props) => props.theme.panel.bgHeader};
     padding: 10px;
     border-radius: 4px 4px 0 0;
`;

export const IconColapse = styled.i`
     cursor: pointer;
     padding: 0 10px;
`;

export const ChildrenContainer = styled.div`
     display: flex;
     background-color: ${(props) => props.theme.panel.bgChildren};
     padding: 10px;
     border-radius: 0 0 4px 4px;
`;
