import { StyledLabel, Input, Span } from "./styles";

export type propsToggle = {
     onChange: (e: any) => void;
     checked: boolean;
};

export function Toggle({ onChange, checked }: propsToggle) {
     return (
          <StyledLabel>
               <Input
                    checked={checked}
                    type="checkbox"
                    onChange={(e) => onChange(e.target.checked)}
               />
               <Span />
          </StyledLabel>
     );
}
