import React, { useEffect, useRef } from "react";

interface IToast {
    open: boolean;
    summary: string;
    detail: string;
    severity: string;
    life: number;
}

export function ToastMsg(props: IToast) {
    const {
        open = false,
        summary = "",
        detail = "",
        severity = "error",
        life = 3000,
    } = props;

    const toast = useRef(null);

    useEffect(() => {}, []);

    const show = () => {
        if (open) {
            toast.current.show({
                severity: severity,
                summary: summary,
                detail: detail,
                life: life,
            });
        }
    };

    return <></>;
}
