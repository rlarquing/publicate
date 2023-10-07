export const COLORS = {
    primary: "#CA1515",
    star: "#FAE800",
    divider: "#C7C5C5",
    shadow: "#B2B0B0",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#333333",
    placeholderTextColor: "#003f5c",
    link: "#CA0505",
    orange: "#F8C822",
    cream: "#EBF4D6",
    yellow: "#FAE800",
    green: "#00F800",
    red: "#CA1515",
    accent: "#F6F0E6",
    brown: "#320702",

    light: {
        primary: "#F4F4F4",
        borderColor: "#E0E0E0",
        textGray: "#686868",
        textDarkGray: "#383838",
        textDarkGreen: "#054409",
        inputBackground: "#E8E8E8",
        inputBorder: "#DCDCDC",
        blue: "#59ADFF",
        orange: "#F6C387",
        cream: "#E6FFEF",
        green: '#deffe3',
        textSecondary: "#757575",
        superblue: "#2d3e48"
    },
    dark: {
        red: "#751414",
        gray: "#252525",
        primary: "#F8C822",
        borderColor: "#ADADAD",
        textGray: "#CDCDCD",
        textDarkGray: "#858585",
        orange: "#BB5402",
        darkGray: "#1F1F1F",
        cream: "#657939",
        brown: "#2e2b2d",
        superblue: "#222a2f"
    }
}

export const FONTS = {
    title: "Impact",
    black: "RobotoBlack",
    bold: "HelveticaBold",
    regular: "Helvetica",
    compressed: "HelveticaCompressed",
    italic: "HelveticaOblique",
    light: "HelveticaLight",
    thin: "RobotoThin",
    medium: "RobotoMedium"
}

export const SHADOWS = {
    card: {
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.42,
        shadowRadius: 2.22,

        elevation: 5,
    },
    light: {
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    dark: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 7,
    },
    text: {
        textShadowColor: COLORS.gray,
        textShadowOffset: {
            width: 0,
            height: 1,
        },
        textShadowRadius: 2.22,
    }
}

export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
    superLarge: 48,
};