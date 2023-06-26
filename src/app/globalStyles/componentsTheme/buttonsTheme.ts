import { buttonColors, defaultColors, blueColors } from "../colors";

export const darkButton = {
     primary: {
          background: blueColors.blue600,
          color: defaultColors.lightBlue100,
          hover: blueColors.blue500,
          focus: blueColors.blue400,
          disabled: blueColors.blue300,
     },
     outline: {
          background: defaultColors.darkBlue500,
          color: buttonColors.blue300,
          colorHover: buttonColors.white100,
          hover: buttonColors.blue200,
          focus: buttonColors.blue200,
          border: buttonColors.blue300,
          disabled: blueColors.blue300,
     },
};

export const lightButton = {
     primary: {
          background: blueColors.blue600,
          color: defaultColors.lightBlue100,
          hover: blueColors.blue500,
          focus: blueColors.blue400,
          disabled: blueColors.blue300,
     },
     outline: {
          background: defaultColors.darkBlue500,
          color: blueColors.blue600,
          colorHover: defaultColors.lightBlue100,
          hover: blueColors.blue500,
          focus: blueColors.blue400,
          border: blueColors.blue600,
          disabled: blueColors.blue300,
     },
};
