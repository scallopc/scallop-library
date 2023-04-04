import colors from "../colors";

const dark = {
    title: "dark",

    default: {
        background: colors.darkHighColor,
        color: colors.lightHighColor,
        lowColor: colors.darkLowColor,
        shadow: colors.darkLowColor,
        textDetail: colors.auxiliaryBlueMediumColor,
        line: colors.auxiliaryDisabledLowColor,

        //scrol
        thumb: colors.darkLowColor,
        thumbHover: colors.auxiliaryBlueLowColor,

        //buttons
        buttonPrimary: colors.auxiliaryBlueHighColor,
        buttonPrimaryHover: colors.auxiliaryBlueMediumColor,
        buttonPrimaryFocus: colors.auxiliaryBlueLowColor,
        buttonWhite: colors.lightHighColor,
        buttonBorder: colors.darkHoverColorBorder,
        buttonDisabled: colors.auxiliaryDisabledLowColor,
    },
};

export default dark;
