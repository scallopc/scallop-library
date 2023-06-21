import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Container, Span } from "./styles";

export type IButton = {
     children?: React.ReactNode;
     icon?: any;
     size?: string;
     isLoading?: boolean;
     primary?: boolean;
     outline?: boolean;
     danger?: boolean;
     ghost?: boolean;
     onClick?: () => void;
     disabled?: boolean;
     label?: string;
};

export default function Button({
     size,
     disabled,
     primary = true,
     outline,
     danger,
     ghost,
     onClick,
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
               disabled={disabled}
               size={size}
               icon={icon}
               label={label}
               isLoading={isLoading}
               onClick={onClick}
          >
               <i className={icon} />
               <Span>{label}</Span>
          </Container>
     );
}
