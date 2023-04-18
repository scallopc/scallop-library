import { useState } from "react";
import {
  Container,
  InputArea,
  Label,
  InputContainer,
  ContainerChips,
  Icon,
  Span,
  Error,
} from "./styles";

export type InputChipsProps = {
  name?: string;
  label?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  max?: string;
  error?: any;
};

export function InputChips({
  name,
  label,
  value,
  placeholder,
  disabled,
  max,
  error,
}: InputChipsProps) {
  const [chip, setChip] = useState<any>([]);

  const updateChip = (e) => {
    let item = e.target?.value?.trim();
    let list = {
      name: item,
      bgcolor: "",
      color: "",
    };

    if (!max || value.length < max) {
      if (item && value?.indexOf(item) < 0) {
        setChip(value.push(list));
      }
    }
    e.target.value = "";
  };

  const deleteChips = (index) => {
    if (index >= 0) {
      setChip(value.splice(index, 1));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      updateChip(e);
    }
  };

  let tag = value?.map((item, i) => {
    return (
      <ContainerChips
        key={i}
        bgColor={item.bgcolor}
        color={item.color}
        onClick={() => {}}
      >
        <Span>{item.name}</Span>
        <Icon
          className="fa-regular fa-circle-xmark"
          onClick={() => deleteChips(i)}
        />
      </ContainerChips>
    );
  });

  let setPlaceholder = !max || value?.length < max ? placeholder : "";

  const focusInput = (e) => {
    let children = e.target.children;
    if (children.length) children[children.length - 1].focus();
  };

  return (
    <Container>
      <Label htmlFor={name}> {label} </Label>
      <InputArea disabled={disabled} max={max} onClick={focusInput}>
        {tag}
        <InputContainer
          placeholder={setPlaceholder}
          onKeyDown={handleKeyDown}
        />
      </InputArea>
      <Error>{error && <span>{error}</span>}</Error>
    </Container>
  );
}
