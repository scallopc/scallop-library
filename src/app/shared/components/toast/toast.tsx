import { forwardRef, useImperativeHandle, useState } from "react";

export interface IToastProps {
     timeout?: number;
     severity?: "success" | "info" | "warn" | "error" | undefined;
     /**
      * Summary content of the message.
      */
     summary?: React.ReactNode | undefined;
     /**
      * Detail content of the message.
      */
     detail?: React.ReactNode | undefined;
     children?: React.ReactNode | undefined;
}

export interface IToastRef {
     show(message: IToastProps | IToastProps[]): void;
}

const Toast = ({ timeout = 1500 }: IToastProps, ref: React.Ref<IToastRef>) => {
     const [showToast, setShowToast] = useState(false);
     const [toastMsg, setToastMsg] = useState<any>("");

     // ...
     useImperativeHandle(ref, () => ({
          show({ severity, summary, detail, life }) {
               setShowToast(true);
               setToastMsg(`${severity} - ${summary} - ${detail}`);
               setTimeout(() => {
                    setShowToast(false);
               }, life);
          },
     }));
     // ...

     return (
          <div className={`react-toast-container ${showToast ? "show" : ""}`}>
               {toastMsg}
          </div>
     );
};

export default forwardRef(Toast);
