import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Container, Span } from "./styles";
import { IButton } from "./buttons.model";

export function Button({
     sm,
     md = true,
     lg,
     primary = true,
     outline,
     danger,
     ghost,
     onClick,
     disabled,
     icon,
     label,
     isLoading,
}: IButton) {
     return (
          <Container
               primary={primary}
               outline={outline}
               danger={danger}
               ghost={ghost}
               sm={sm}
               md={md}
               lg={lg}
               icon={icon}
               label={label}
               isLoading={isLoading}
               disabled={disabled}
               onClick={onClick}
          >
               <i className={icon} />
               <Span>{label}</Span>
          </Container>
     );
}
