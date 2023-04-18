import { StyledLabel, Input, Span } from "./styles";

export type propsToggle = {
  onChange: (e: any) => void;
};

export default function ToggleSwitch({
  onChange,
}: propsToggle) {

  return (
    <StyledLabel>
      <Input
        type="checkbox"
        onChange={onChange}
      />
      <Span/>
    </StyledLabel>
  );
}
