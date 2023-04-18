import {
    Container,
    InputArea,
    Label,
    Error,
    IconLeft,
    InputContainer,
} from "./styles";

export type InputProps = {
    name?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    value?: any;
    id?: any;
    onChange?: (e: any) => void;
    selected?: (e: any) => void;
    iconLeft?: string;
};

export default function Input({
    name,
    label,
    type,
    placeholder,
    disabled,
    error,
    value,
    selected,
    onChange,
    iconLeft,
    required,
    id,
}: InputProps) {
    const handleInput = () => {
        if (iconLeft) {
            return (
                <InputArea
                    disabled={disabled}
                    error={error}
                    required={required}
                >
                    <IconLeft className={iconLeft} />
                    <InputContainer
                        id={id}
                        placeholder={placeholder}
                        type={type}
                        disabled={disabled}
                        onChange={onChange}
                        value={value}
                    />
                </InputArea>
            );
        } else {
            return (
                <InputArea
                    disabled={disabled}
                    error={error}
                    required={required}
                >
                    <InputContainer
                        placeholder={placeholder}
                        type={type}
                        disabled={disabled}
                        onChange={onChange}
                        value={value}
                        id={id}
                    />
                </InputArea>
            );
        }
    };
    return (
        <Container>
            <Label htmlFor={name}>
                {" "}
                {label}
                {required && <i className="fa-regular fa-asterisk"></i>}
            </Label>
            {handleInput()}
            <Error>{error && <span>{error}</span>}</Error>
        </Container>
    );
}
