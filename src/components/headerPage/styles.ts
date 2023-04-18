import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  background-color: ${(props) => props.theme.default.bgAlternative1};
  padding: 12px 19px 12px 24px;
  width: 100%;
  height: 56px;
  gap: 30px;
  z-index: 1;
`;

export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ServiceName = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.default.color};
  margin-top: 6px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const ImageTenant = styled.img`
  width: 20px;
  border-radius: 50px;
  height: 20px;
  object-fit: cover;
`;
