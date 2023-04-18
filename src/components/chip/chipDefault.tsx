import { ContainerChipDefault, IconRemoveItem, Label } from "./styles";

export type IChipDefault = {
  removable?: boolean;
  label?: any;
  onRemoveItem: (e) => void;
};

export function ChipDefault({ label, removable, onRemoveItem }: IChipDefault) {
  return (
    <ContainerChipDefault>
      <Label>{label}</Label>
      {removable ? (
        <IconRemoveItem className="fa-regular fa-circle-xmark" onClick={(e) => onRemoveItem(e)} />
      ) : (
        ""
      )}
    </ContainerChipDefault>
  );
}
