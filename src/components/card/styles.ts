import styled, { css } from "styled-components";

export const IconApp = styled.i<any>`
  position: relative;
  color: ${(props) => props.iconColors};
  cursor: pointer;
`;

export const Icon = styled.i`
  font-size: 16px;
  background: transparent;
  color: #555770;
`;

const type = {
  list: css`
    ${IconApp} {
      font-size: 40px;
    }
  `,
  block: css`
    ${IconApp} {
      font-size: 50px;
    }
  `,
};

//CardDefault start
export const CardDefault = styled.div<any>`
  padding: 12px;
  gap: 12px;
  width: auto;
  height: auto;
  background: ${(props) => props.theme.card.background};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.card.borderColor};
  ${(props) => props.type && type[props.type]}
`;

//CardListContainer start
export const CardListContainer = styled(CardDefault)`
  width: 310px;
  height: 80px;
  ${(props) => props.type && type[props.type]}
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    background-color: ${(props) => props.theme.card.hover};
  }
`;

//CardBlockContainer start
export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 5px;
`;

export const CardBlockContainer = styled(CardDefault)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 6px;
  width: 242px;
  max-height: 175px;
  position: relative;
  ${(props) => props.type && type[props.type]}
`;

export const IconsContainerBlock = styled(IconsContainer)`
  position: absolute;
  right: 20px;
  top: 20px;
  gap: 10px;
`;

export const IconBlock = styled.div`
  background-color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }
`;

//CardViewContainer start
export const CardViewContainer = styled(CardDefault)`
  display: flex;
  width: 331px;
  height: 144px;
  position: relative;
  cursor: pointer;
  ${(props) => props.type && type[props.type]}
`;

export const IconClass = styled.i<any>`
  font-size: 55px;
  color: ${(props) => props.theme.card.iconColor};
  margin-bottom: 10px;
`;

export const TagView = styled.div`
  color: #fafafc;
  background: #9fa8b2;
  font-size: 10px;
  width: 80px;
  height: 16px;
  border-radius: 4px;
  text-align: center;
`;

export const TagClass = styled(TagView)`
  background: #ac5dd9;
`;

export const TagCount = styled(TagView)`
  background: #5b8def;
`;

//CardTopologyContainer start
export const CardTopologyContainer = styled(CardDefault)`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;
  gap: 5px;
  width: 250px;
  height: 160px;
  border-radius: 4px;
  overflow: hidden;
  ${(props) => props.type && type[props.type]}
`;

export const BorderColor = styled.div<any>`
  width: 100%;
  height: 5px;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.card.borderColor};
  position: absolute;
`;

export const ContainerBadge = styled.div`
  display: flex;
  gap: 4px;
  max-width: 100%;
  overflow: hidden;
  height: 25px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.input.disabled};
  border-radius: 2px;
  white-space: nowrap;
  margin-top: 10px;
`;
