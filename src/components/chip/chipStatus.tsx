import { ContainerChip, IconRemoveItem, Label } from "./styles";

export type IChipStatus = {
  severity:
    | "info"
    | "success"
    | "alert"
    | "danger"
    | "remember"
    | "offline"
    | "primary"
    | "not_available";
  label?: any;
  icon?: any;
  removable?: boolean;
  onRemoveItem: (e) => void;
};

export function ChipStatus({
  severity,
  label,
  onRemoveItem,
  removable,
}: IChipStatus) {
  return (
    <ContainerChip severity={severity}>
      <Label>{label}</Label>
      {removable ? (
        <IconRemoveItem
          className="fa-regular fa-circle-xmark"
          onClick={(e) => onRemoveItem(e)}
        />
      ) : (
        ""
      )}
    </ContainerChip>
  );
}
