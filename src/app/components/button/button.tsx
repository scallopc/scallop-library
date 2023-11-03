import { Container, Load } from "./styles";
import { IButton } from "./buttons.model";

export function Button({
     sm,
     md = true,
     lg,
     primary,
     outline,
     danger,
     text,
     onClick,
     disabled,
     icon,
     label,
     loading,
     rounded,
}: IButton) {
     return (
          <Container
               onClick={onClick}
               label={label}
               icon={icon}
               disabled={disabled}
               loading={loading}
               rounded={rounded}
               primary={primary}
               outline={outline}
               danger={danger}
               text={text}
               sm={sm}
               md={md}
               lg={lg}
          >
             {loading && <Load className="bi bi-circle" />}
      {!loading && (
        <>
          <i className={icon} />
          <span>{label}</span>
        </>
      )}
          </Container>
     );
}
