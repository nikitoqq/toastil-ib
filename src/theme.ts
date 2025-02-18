export const colors = {
  white: "#fff",
  beige: "#f1f1f1",
  blue: "#3498db",
  lightBlue: "#64b0e3",
  black: "#000",
  gray: "#5d5d5d",
  lightGray: "#757575",
  red: "#e74d3c",
  lightRed: "#ea776a",
  green: "#0bb210",
  lightGreen: "#42cc45",
  orange: "#f1c40f",
  lightOrange: "#f4d149",
  gradient:
    "linear-gradient(90deg, #1dfdf7 15%, #f06b8a 30%, #82b6ea 45%, #6ae160 60%, #b280fb 75%)",
};

export const spacings = {
  primary: [
    "2px",
    "4px",
    "8px",
    "16px",
    "20px",
    "24px",
    "32px",
    "40px",
    "52px",
  ],
};

export const themeStyle = {
  light: {
    h1: colors.gray,
    h2: colors.lightGray,
    info: {
      iconColor: colors.blue,
      barColor: colors.lightBlue,
      backgroundColor: colors.white,
    },
    success: {
      iconColor: colors.green,
      barColor: colors.lightGreen,
      backgroundColor: colors.white,
    },
    warning: {
      iconColor: colors.orange,
      barColor: colors.lightOrange,
      backgroundColor: colors.white,
    },
    error: {
      iconColor: colors.red,
      barColor: colors.lightRed,
      backgroundColor: colors.white,
    },
    default: {
      barColor: colors.gradient,
      backgroundColor: colors.white,
    },
  },
  dark: {
    h1: colors.white,
    h2: colors.beige,
    info: {
      barColor: colors.lightBlue,
      iconColor: colors.white,
      backgroundColor: colors.black,
    },
    success: {
      barColor: colors.lightGreen,
      iconColor: colors.white,
      backgroundColor: colors.black,
    },
    warning: {
      barColor: colors.lightOrange,
      iconColor: colors.white,
      backgroundColor: colors.black,
    },
    error: {
      barColor: colors.lightRed,
      iconColor: colors.white,
      backgroundColor: colors.black,
    },
    default: {
      barColor: colors.gradient,
      iconColor: colors.white,
      backgroundColor: colors.black,
    },
  },
  colored: {
    h1: colors.white,
    h2: colors.beige,
    info: {
      barColor: colors.lightBlue,
      backgroundColor: colors.blue,
      iconColor: colors.white,
    },
    success: {
      barColor: colors.lightGreen,
      backgroundColor: colors.green,
      iconColor: colors.white,
    },
    warning: {
      barColor: colors.lightOrange,
      backgroundColor: colors.orange,
      iconColor: colors.white,
    },
    error: {
      barColor: colors.lightRed,
      backgroundColor: colors.red,
      iconColor: colors.white,
    },
    default: {
      barColor: colors.gradient,
      iconColor: colors.white,
    },
  },
};
