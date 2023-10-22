import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
     Container,
     Content,
     ContentIconText,
     Icon,
     IconClose,
     TextContainer,
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
     summary: string;
     detail: string;
     life: number;
}

const Toast = (_, ref: React.Ref<IToastRef>) => {
     const [toasts, setToasts] = useState([]); // Lista de toasts
     const [showToast, setShowToast] = useState(false);

     // useEffect(() => {
     //      if (toasts.length > 0) {
     //           const timer = setTimeout(() => {
     //                removeToast(0); // Remove o toast mais antigo após um período de tempo
     //           }, toasts[0].life);

     //           return () => clearTimeout(timer);
     //      }
     // }, [toasts]);

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
                                   <Icon className="fa-solid fa-check" />
                              )}
                              {toastConfig.severity === "error" && (
                                   <Icon className="fa-solid fa-xmark" />
                              )}
                              {toastConfig.severity === "warn" && (
                                   <Icon className="fa-solid fa-triangle-exclamation" />
                              )}
                              {toastConfig.severity === "info" && (
                                   <Icon className="fa-solid fa-info" />
                              )}
                              <TextContainer>
                                   <span className="summary">
                                        {toastConfig.summary}
                                   </span>
                                   <span className="detail">
                                        {toastConfig.detail}
                                   </span>
                              </TextContainer>
                         </ContentIconText>
                         <IconClose
                              className="fa-solid fa-xmark"
                              onClick={() => removeToast(index)}
                         />
                    </Content>
               ))}
          </Container>
     );
};

export default forwardRef(Toast);
