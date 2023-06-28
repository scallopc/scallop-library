import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Container } from "./styles";
import { IButton } from "./buttons.model";

export function Button({
     sm,
     md = true,
     lg,
     primary = true,
     outline,
     danger,
     text,
     onClick,
     disabled,
     icon,
     label,
     isLoading,
     rounded,
}: IButton) {
     return (
          <Container
               onClick={onClick}
               label={label}
               icon={icon}
               disabled={disabled}
               isLoading={isLoading}
               rounded={rounded}
               primary={primary}
               outline={outline}
               danger={danger}
               text={text}
               sm={sm}
               md={md}
               lg={lg}
          >
               <i className={icon} />
               <span>{label}</span>
          </Container>
     );
}
