import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Container, Span } from "./styles";

export type IButton = {
    children?: React.ReactNode;
    icon?: any;
    size?: string;
    isLoading?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    variant: "primary" | "outline" | "text" | "danger";
    label?: string;
};

export default function Button({
    size,
    disabled,
    variant = "primary",
    isLoading = false,
    onClick,
    icon,
    label,
}: IButton) {
    return (
        <Container
            variant={variant}
            size={size}
            disabled={disabled}
            onClick={onClick}
        >
            <i className={icon} />
            <Span>{label}</Span>
        </Container>
    );
}
