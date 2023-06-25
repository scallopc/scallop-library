import { defaultColors } from "../colors/defaultColors";
import { lightButton } from "../componentsTheme/buttonsTheme";

export const light = {
     title: "light",

     default: {
          //default
          background: defaultColors.lightBlue100,
          title: defaultColors.lightBlue500,
          color: defaultColors.lightBlue400,
          lowColor: defaultColors.lightBlue200,
          lowBackground: defaultColors.lightBlue300,
          detail: defaultColors.lightBlue400,
          shadow: defaultColors.lightBlueOpacity,

          //scrol
          thumb: defaultColors.lightBlueOpacity,
          thumbHover: defaultColors.lightBlue300,
     },

     ...lightButton,
};
