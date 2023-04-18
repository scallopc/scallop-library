import styled, { css, keyframes } from "styled-components";

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

const animationCloseModal = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }    
 `;

const animationOpenModal = keyframes`
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }    
 `;


export const ModalOverlay = styled.div`
  background: #000000a6;
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.i`
  font-size: 25px;
  cursor: pointer;
`;

const size = {
  sm: css`
    max-width: 500px;
  `,

  md: css`
    max-width: 690px;
  `,

  lg: css`
    max-width: 850px;
  `,
};

export const ModalContainer = styled.div<any>`
  background: ${(props) => props.theme.default.background};
  border-radius: 0.1rem;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
  max-height: 75vh;
  width: 100%;
  transition: 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  border-radius: 10px;
  ${(props) => props.size && size[props.size]}
  -webkit-animation: ${animationOpenModal}  0.5s both;
  animation: ${animationOpenModal} 0.5s both;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 10px 0;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;