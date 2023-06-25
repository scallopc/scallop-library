import { buttonColors, defaultColors } from "../colors";

export const darkButton = {
     primary: {
          background: buttonColors.blue300,
          color: buttonColors.white100,
          hover: buttonColors.blue200,
          focus: buttonColors.blue400,
     },
     outline: {
          background: defaultColors.darkBlue500,
          color: buttonColors.blue300,
          colorHover: buttonColors.white100,
          hover: buttonColors.blue200,
          focus: buttonColors.blue200,
          border: buttonColors.blue300,
     },
     disabled: {
          background: buttonColors.white300,
          color: buttonColors.blue100,
          border: "transparent",
     },
};

export const lightButton = {
     primary: {
          background: buttonColors.blue300,
          color: buttonColors.white100,
          hover: buttonColors.blue200,
          focus: buttonColors.blue400,
     },
     outline: {
          background: defaultColors.darkBlue500,
          color: buttonColors.blue300,
          colorHover: buttonColors.white100,
          hover: buttonColors.blue200,
          focus: buttonColors.blue400,
          border: buttonColors.blue300,
     },
     disabled: {
          background: buttonColors.white300,
          color: buttonColors.blue100,
          border: "transparent",
     },
};
