type IButtonType = {
     primary?: boolean;
     outline?: boolean;
     danger?: boolean;
     ghost?: boolean;
};

type IButtonSize = {
     sm?: boolean;
     md?: boolean;
     lg?: boolean;
};

export type IButton = IButtonType &
     IButtonSize & {
          children?: React.ReactNode;
          icon?: any;
          size?: string;
          isLoading?: boolean;
          onClick?: () => void;
          disabled?: boolean;
          label?: string;
     };
