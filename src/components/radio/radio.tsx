import { Label, RadioButton } from "./styles";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

export interface IInputGroup {
  disabled?: boolean;
  label?: string;
  onChange?: (e) => void;
  id?: string;
  checked?: boolean;
  value?: string;
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export function Radio({
  label,
  disabled,
  id,
  checked,
  onChange,
}: IInputGroup) {

  return (
      <Label htmlFor={id} disabled={disabled}>
        {label}
        <RadioButton
          type="radio"
          value={label}
          key={id}
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
      </Label>
  );
}
