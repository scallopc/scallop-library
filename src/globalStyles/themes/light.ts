import { defaultColors } from "../colors/defaultColors";
import { lightButton } from "../components/buttons";

const light = {
     title: "light",

     default: {
          //default
          background: "aqua",
          color: "red",
          lowColor: defaultColors.darkBlue400,
          detail: defaultColors.darkBlue400,
          shadow: defaultColors.lightBlue500,

          //scrol
          thumb: defaultColors.darkBlue100,
          thumbHover: defaultColors.darkBlue300,
     },

     ...lightButton,
};

export default light;
