export const colors = {
  white: "#fff",
  // по примеру все остальные цвета
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
    h1: "rgb(93, 93, 93)",
    h2: "#757575",
    info: {
      iconColor: "#3498db",
      barColor: "#64b0e3",
      backgroundColor: colors.white,
    },
    success: {
      iconColor: "#0bb210",
      barColor: "#42cc45",
      backgroundColor: colors.white,
    },
    warning: {
      iconColor: "#f1c40f",
      barColor: "#f4d149",
      backgroundColor: colors.white,
    },
    error: {
      iconColor: "#e74d3c",
      barColor: "#ea776a",
      backgroundColor: colors.white,
    },
    default: {
      barColor:
        "linear-gradient(90deg, #1dfdf7 15%, #f06b8a 30%, #82b6ea 45%, #6ae160 60%, #b280fb 75%)",
      backgroundColor: colors.white,
    },
  },
  dark: {
    h1: "rgb(255, 255, 255)",
    h2: "rgb(241, 241, 241)",
    info: {
      barColor: "#64b0e3",
      iconColor: colors.white,
      backgroundColor: "#000",
    },
    success: {
      barColor: "#42cc45",
      iconColor: colors.white,
      backgroundColor: "#000",
    },
    warning: {
      barColor: "#f4d149",
      iconColor: colors.white,
      backgroundColor: "#000",
    },
    error: {
      barColor: "#ea776a",
      iconColor: colors.white,
      backgroundColor: "#000",
    },
    default: {
      barColor:
        "linear-gradient(90deg, #1dfdf7, #f06b8a, #82b6ea, #6ae160, #b280fb)",
      iconColor: colors.white,
      backgroundColor: "#000",
    },
  },
  colored: {
    h1: "rgb(255, 255, 255)", // где-то rgb, где-то hex, это если что тоже белыйы
    h2: "rgb(241, 241, 241)",
    info: {
      barColor: "#64b0e3",
      backgroundColor: "#3498db",
      iconColor: colors.white,
    },
    success: {
      barColor: "#42cc45",
      backgroundColor: "#0bb210",
      iconColor: colors.white,
    },
    warning: {
      barColor: "#f4d149",
      backgroundColor: "#f1c40f",
      iconColor: colors.white,
    },
    error: {
      barColor: "#ea776a",
      backgroundColor: "#e74d3c",
      iconColor: colors.white,
    },
    default: {
      barColor:
        "linear-gradient(90deg, rgba(29,253,247,1) 14%, rgba(240,107,138,1) 33%, rgba(130,182,234,1) 53%, rgba(106,225,96,1) 75%, rgba(178,128,251,1))",
      iconColor: colors.white,
    },
  },
};
