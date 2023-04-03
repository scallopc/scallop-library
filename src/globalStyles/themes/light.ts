import colors from "../colors";

const light = {
    title: "light",

    default: {
        background: colors.lightHighColor,
        color: colors.darkLowColor,
        lowColor: colors.lightLowColor,
        textDetail: colors.auxiliaryBlueMediumColor,
        shadow: colors.auxiliaryDisabledLowColor,
        line: colors.auxiliaryDisabledLowColor,

        //scrol
        thumb: colors.auxiliaryBlueLowColor,
        thumbHover: colors.lightHighColor,

        //buttons
        buttonPrimary: colors.auxiliaryBlueHighColor,
        buttonPrimaryHover: colors.auxiliaryBlueMediumColor,
        buttonPrimaryFocus: colors.auxiliaryBlueLowColor,
        buttonWhite: colors.lightHighColor,
        buttonBorder: colors.darkHoverColorBorder,
        buttonDisabled: colors.auxiliaryDisabledLowColor,
    },
};

export default light;
