type IButtonType = {
     primary?: boolean;
     outline?: boolean;
     danger?: boolean;
     text?: boolean;
};

type IButtonSize = {
     sm?: boolean;
     md?: boolean;
     lg?: boolean;
};

export type IButton = IButtonType &
     IButtonSize & {
          children?: React.ReactNode;
          onClick?: () => void;
          icon?: any;
          label?: string;
          loading?: boolean;
          disabled?: boolean;
          rounded?: boolean;
     };
