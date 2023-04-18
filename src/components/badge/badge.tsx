import { ContainerBadge, Label } from "./styles";

export type IBadge = {
  severity:
    | "info"
    | "success"
    | "alert"
    | "danger"
    | "remember"
    | "offline"
    | "primary"
    | "not_available";
  badges?: any;
  label?: any;
  children?: React.ReactNode;
};

export function Badge({ severity, badges, label }: IBadge) {
  return (
    <ContainerBadge severity={severity}>
      <Label>{label}</Label>
    </ContainerBadge>
  );
}
