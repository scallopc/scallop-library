import { defaultColors, blueColors } from "../colors";

export const darkPaginator = {
     paginatorNumber: {
          hover: defaultColors.darkBlue100,
          colorHover: defaultColors.lightBlue300,
          color: defaultColors.darkBlue100,
          activeBg: defaultColors.darkBlue200,
          activeColor: defaultColors.lightBlue300,
     },

     paginatorText: {
          background: defaultColors.darkBlue200,
          color: defaultColors.lightBlue300,
          hover: defaultColors.darkBlue100,
          hoverColor: defaultColors.lightBlue300,
          disabledBg: defaultColors.darkBlue600,
          disabledColor: defaultColors.darkBlue300,
     },
};

export const lightPaginator = {
     paginatorNumber: {
          hover: defaultColors.lightBlue100,
          colorHover: defaultColors.darkBlue100,
          color: defaultColors.darkBlue100,
          activeBg: defaultColors.lightBlue300,
          activeColor: defaultColors.lightBlue500,
     },

     paginatorText: {
          background: defaultColors.lightBlue200,
          color: defaultColors.lightBlue500,
          hover: defaultColors.lightBlue100,
          hoverColor: defaultColors.lightBlue500,
          disabledBg: defaultColors.darkBlue600,
          disabledColor: defaultColors.darkBlue300,
     },
};
