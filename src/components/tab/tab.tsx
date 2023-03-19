import { ReactNode } from "react";
import { Body } from "./styles";

export type props = {
    children?: ReactNode;
    title: string;
    styleTabActive?: "default" | "around";
};

export function Tab({ children, styleTabActive }: props) {
    return <Body styleTabActive={styleTabActive}>{children}</Body>;
}
