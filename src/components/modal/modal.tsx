import Heading from "../heading/heading";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./styles";

export type IMenu = {
  children: React.ReactNode;
  title: string;
  active: boolean;
  size: "sm" | "md" | "lg";
  hideModal?: () => void;
};

export function Modal({ title, children, active, hideModal, size = 'lg' }: IMenu) {
  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer size={size}>
            <ModalHeader>
              <Heading type="heading" headingSize="h2" fontWeight="bold">
                {title}
              </Heading>
              <ModalClose
                className="fa-regular fa-xmark"
                onClick={() => hideModal()}
              />
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
}
