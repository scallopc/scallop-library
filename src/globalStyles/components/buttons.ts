import { defaultColors } from "../colors/defaultColors";

export const darkButton = {
     primary: {
          background: defaultColors.darkPrimary300,
          color: defaultColors.darkPrimary100,
          hover: defaultColors.darkPrimary200,
          focus: defaultColors.darkPrimary200,
     },
     outline: {
          background: defaultColors.darkBlue500,
          color: defaultColors.darkOutline300,
          colorHover: defaultColors.darkOutline100,
          hover: defaultColors.darkOutline200,
          focus: defaultColors.darkOutline200,
          border: defaultColors.darkOutline300,
     },
};

export const lightButton = {
     primary: {
          background: "#bfc3cd",
          color: "red",
          hover: "red",
          focus: "red",
     },
     outline: {
          background: "#bfc3cd",
          color: "red",
          hover: "red",
          focus: "red",
          border: "red",
     },
};
