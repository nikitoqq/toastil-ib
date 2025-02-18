import { spacings, themeStyle } from "../theme";
import { ToastIconLinkType, ToastStyleDataType } from "../types";

const toastIconLink: ToastIconLinkType = {
  info: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",

  error:
    "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",

  success:
    "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",

  warning:
    "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
  default: "",
};

const toastStyleData = {
  topRight: {
    top: spacings.primary[4],
    right: "2vw",
  },
  topLeft: {
    top: spacings.primary[4],
    left: "2vw",
  },
  topCenter: {
    left: "50%",
    transform: "translate(-50%)",
    top: spacings.primary[4],
  },
  bottomRight: {
    bottom: spacings.primary[4],
    right: "2vw",
  },
  bottomLeft: {
    bottom: spacings.primary[4],
    left: "2vw",
  },
  bottomCenter: {
    bottom: spacings.primary[4],
    transform: "translate(-50%)",
    left: "50%",
  },
};

export const setStateTypes = (
  type: "info" | "error" | "success" | "warning" | "default"
) => toastIconLink[type] || toastIconLink.default;

export const setStateStyle = (position: string, item?: number) => {
  const pos =
    position === "top-left"
      ? toastStyleData.topLeft
      : position === "top-center"
      ? toastStyleData.topCenter
      : position === "bottom-left"
      ? toastStyleData.bottomLeft
      : position === "bottom-center"
      ? toastStyleData.bottomCenter
      : position === "bottom-right"
      ? toastStyleData.bottomRight
      : toastStyleData.topRight;

  return setSpace(position, pos, item);
};

export const setStateTheme = (theme: string, type: string) => {
  const themes =
    theme === "dark"
      ? themeStyle.dark
      : theme === "colored"
      ? themeStyle.colored
      : themeStyle.light;

  return {
    h1: themes.h1,
    h2: themes.h2,
    ...(type === "info"
      ? themes.info
      : type === "success"
      ? themes.success
      : type === "error"
      ? themes.error
      : type === "warning"
      ? themes.warning
      : themes.default),
  };
};

export const setStateTransition = (
  transition: string,
  position: string,
  revers?: string
) => {
  revers = typeof revers === "undefined" ? "" : revers;

  if (transition === "slide") {
    return `0.5s linear 0s alternate ${
      position === "bottom-right"
        ? "slide-bottom-right"
        : position === "bottom-center"
        ? "slide-bottom-center"
        : position === "bottom-left"
        ? "slide-bottom-left"
        : position === "top-left"
        ? "slide-top-left"
        : position === "top-center"
        ? "slide-top-center"
        : "slide-top-right"
    }${revers}`;
  } else if (transition === "bounce") {
    return `0.5s linear 0s alternate ${
      position === "bottom-right"
        ? "bounce-bottom-right"
        : position === "bottom-center"
        ? "bounce-bottom-center"
        : position === "bottom-left"
        ? "bounce-bottom-left"
        : position === "top-left"
        ? "bounce-top-left"
        : position === "top-center"
        ? "bounce-top-center"
        : "bounce-top-right"
    }${revers}`;
  } else if (transition === "zoom") {
    return `0.5s ease alternate ${
      position === "bottom-center" || position === "top-center"
        ? "zoom-center"
        : "zoom"
    }${revers}`;
  } else if (transition === "flip") {
    return `0.5s ease alternate ${
      position === "bottom-center" || position === "top-center"
        ? "flip-center"
        : "flip"
    }${revers}`;
  }
};

const setSpace = (position: string, pos: ToastStyleDataType, item?: number) => {
  if (item === 0 && position.includes("top")) {
    pos.top = spacings.primary[4];
    return pos;
  }
  if (item === 0 && position.includes("bottom")) {
    pos.bottom = spacings.primary[4];
    return pos;
  }
  if (position.includes("top")) {
    if (item) {
      pos.top = `${100 * item + 20}px`;
    }
    return pos;
  }

  if (position.includes("bottom")) {
    if (item) {
      pos.bottom = `${100 * item + 20}px`;
    }
    return pos;
  }
};
