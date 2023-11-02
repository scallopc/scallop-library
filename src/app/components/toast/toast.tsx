import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
     Container,
     Content,
     ContentIconText,
     Icon,
     IconClose,
     MsgContainer,
} from "./styles";

export interface IToastProps {
     timeout?: number;
     severity?: string;
}

export interface IToastRef {
     show(toastConfig: ToastConfig): void;
}

interface ToastConfig {
     severity: string;
     message: string;
}

const Toast = (_, ref: React.Ref<IToastRef>) => {
     const [toasts, setToasts] = useState([]); // Lista de toasts
     const [showToast, setShowToast] = useState(false);

     useEffect(() => {
          if (toasts.length > 0) {
               const timer = setTimeout(() => {
                    removeToast(0); // Remove o toast mais antigo após um período de tempo
               }, 3000);

               return () => clearTimeout(timer);
          }
     }, [toasts]);

     const removeToast = (index) => {
          setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index));
     };

     useImperativeHandle(ref, () => ({
          show(toastConfig: ToastConfig) {
               setToasts((prevToasts) => [...prevToasts, toastConfig]); // Adiciona o novo toast à lista
               setShowToast(true);
          },
     }));

     return (
          <Container>
               {toasts.map((toastConfig, index) => (
                    <Content
                         key={index}
                         className={` ${showToast ? "show" : ""} ${
                              toastConfig.severity
                         }`}
                    >
                         <ContentIconText>
                              {toastConfig.severity === "success" && (
                                   <Icon className="bi bi-check-circle-fill" />
                              )}
                              {toastConfig.severity === "error" && (
                                   <Icon className="bi bi-x-circle-fill"></Icon>
                              )}
                              {toastConfig.severity === "warn" && (
                                   <Icon className="bi bi-exclamation-circle-fill" />
                              )}
                              {toastConfig.severity === "info" && (
                                   <Icon className="bi bi-info-circle-fill" />
                              )}
                              <MsgContainer>{toastConfig.message}</MsgContainer>
                         </ContentIconText>
                         <IconClose
                              className="bi bi-x"
                              onClick={() => removeToast(index)}
                         />
                    </Content>
               ))}
          </Container>
     );
};

export default forwardRef(Toast);
