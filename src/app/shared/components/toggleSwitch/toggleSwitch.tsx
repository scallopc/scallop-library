import React, { useState } from "react";
import styled from "styled-components";
import { SwitchSlider, SwitchWrapper } from "./styles";

interface ToggleSwitchProps {
     checked: boolean;
     onChange?: (checked: boolean) => void;
}

export function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
     const [isChecked, setIsChecked] = useState(checked);

     const handleToggle = () => {
          const newChecked = !isChecked;
          setIsChecked(newChecked);
          onChange(newChecked);
     };

     return (
          <SwitchWrapper checked={isChecked} onClick={handleToggle}>
               <SwitchSlider checked={isChecked} />
          </SwitchWrapper>
     );
}
