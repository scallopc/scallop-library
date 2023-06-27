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
          onClick?: () => void;
          icon?: any;
          label?: string;
          isLoading?: boolean;
          disabled?: boolean;
          rounded?: boolean;
     };
