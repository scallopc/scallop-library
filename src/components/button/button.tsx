import { Container, Span } from "./styles";

export type IButton = {
    icon?: string;
    size?: any;
    isLoading?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    type?: any;
    label?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    danger?: boolean;
    small?: boolean;
    large?: boolean;
    medium?: boolean;
    variant?: "primary" | "outline" | "text" | "danger";
};

export default function Button({
    size,
    disabled,
    onClick,
    icon,
    label,
    variant,
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
