import { defaultColors, blueColors } from "../colors";

export const darkToggle = {
     toggle: {
          slider: blueColors.blue100,
          active: blueColors.blue600,
          inactive: defaultColors.darkBlue100,
     },
};

export const lightToggle = {
     toggle: {
          slider: defaultColors.lightBlue200,
          active: blueColors.blue500,
          inactive: defaultColors.darkBlue100,
     },
};
