import { defaultColors } from "../colors/defaultColors";
import { darkButton } from "../components/buttons";

const dark = {
     title: "dark",

     default: {
          //default
          background: defaultColors.darkBlue400,
          color: defaultColors.darkBlue200,
          lowColor: defaultColors.darkBlue300,
          shadow: defaultColors.darkBlue300,
          detail: "#bfc5ff",

          //scrol
          thumb: "red",
          thumbHover: defaultColors.darkBlue300,
     },

     ...darkButton,
};

export default dark;
