import { defaultColors } from "../colors";
import {
     darkToggle,
     darkButton,
     darkPaginator,
     darkTable,
} from "../componentsTheme";

export const dark = {
     title: "dark",

     default: {
          //default
          background: defaultColors.darkBlue400,
          title: defaultColors.lightBlue500,
          color: defaultColors.darkBlue100,
          lowColor: defaultColors.darkBlue300,
          lowBackground: defaultColors.darkBlue600,
          shadow: defaultColors.darkBlue300,
          detail: defaultColors.darkBlue100,

          //scrol
          thumb: defaultColors.darkBlue300,
          thumbHover: defaultColors.darkBlue100,
     },

     ...darkButton,
     ...darkToggle,
     ...darkPaginator,
     ...darkTable,
};
