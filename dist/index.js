"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  App: () => App,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/hooks/UseNotification.tsx
var import_react = require("react");
var useNotification = () => {
  const [id, setId] = (0, import_react.useState)("0");
  const [toast, setToast] = (0, import_react.useState)([
    {
      position: "bottom-right",
      title: "Wow toast",
      text: "Wow it`s easy!",
      type: "info",
      theme: "colored",
      transition: "flip",
      autoClose: "1000",
      id
    }
  ]);
  const deleteToast = (e) => {
    setToast(
      (prev) => prev.filter((el) => el.id !== e.target.id)
    );
  };
  const addToast = (obj) => {
    setId((prev) => `${+prev + 1}`);
    if (toast.length === 0) {
      obj.item = 0;
      setToast((prev) => [...prev, obj]);
    }
    const itemPos = toast.reduce((acc, cur) => {
      if (cur.position === obj.position) {
        acc += 1;
      }
      return acc;
    }, 0);
    obj.item = itemPos;
    setToast((prev) => [...prev, obj]);
  };
  return { toast, addToast, deleteToast };
};

// src/Toast.tsx
var import_react4 = __toESM(require("react"));
var import_styled_components5 = require("styled-components");

// src/components/Toastify/index.tsx
var import_react3 = __toESM(require("react"));

// src/theme.ts
var themeStyle = {
  light: {
    h1: "rgb(93, 93, 93)",
    h2: "#757575",
    info: {
      iconColor: "#3498db",
      barColor: "#64b0e3",
      backgroundColor: "#fff"
    },
    success: {
      iconColor: "#0bb210",
      barColor: "#42cc45",
      backgroundColor: "#fff"
    },
    warning: {
      iconColor: "#f1c40f",
      barColor: "#f4d149",
      backgroundColor: "#fff"
    },
    error: {
      iconColor: "#e74d3c",
      barColor: "#ea776a",
      backgroundColor: "#fff"
    },
    default: {
      barColor: "#64b0e3",
      backgroundColor: "#fff"
    }
  },
  dark: {
    h1: "rgb(255, 255, 255)",
    h2: "rgb(241, 241, 241)",
    info: {
      barColor: "#64b0e3",
      iconColor: "#fff",
      backgroundColor: "#000"
    },
    success: {
      barColor: "#42cc45",
      iconColor: "#fff",
      backgroundColor: "#000"
    },
    warning: {
      barColor: "#f4d149",
      iconColor: "#fff",
      backgroundColor: "#000"
    },
    error: {
      barColor: "#ea776a",
      iconColor: "#fff",
      backgroundColor: "#000"
    },
    default: {
      barColor: "#64b0e3",
      iconColor: "#fff",
      backgroundColor: "#000"
    }
  },
  colored: {
    h1: "rgb(255, 255, 255)",
    h2: "rgb(241, 241, 241)",
    info: {
      barColor: "#64b0e3",
      backgroundColor: "#3498db",
      iconColor: "#fff"
    },
    success: {
      barColor: "#42cc45",
      backgroundColor: "#0bb210",
      iconColor: "#fff"
    },
    warning: {
      barColor: "#f4d149",
      backgroundColor: "#f1c40f",
      iconColor: "#fff"
    },
    error: {
      barColor: "#ea776a",
      backgroundColor: "#e74d3c",
      iconColor: "#fff"
    },
    default: {
      barColor: "#64b0e3",
      iconColor: "#fff"
    }
  }
};

// src/utils/utils.ts
var toastIconLink = {
  info: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
  error: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
  success: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
  warning: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
  default: ""
};
var toastStyleData = {
  topRight: {
    top: "20px",
    right: "2vw"
  },
  topLeft: {
    top: "20px",
    left: "2vw"
  },
  topCenter: {
    left: "50%",
    transform: "translate(-50%)",
    top: "20px"
  },
  bottomRight: {
    bottom: "20px",
    right: "2vw"
  },
  bottomLeft: {
    bottom: "20px",
    left: "2vw"
  },
  bottomCenter: {
    bottom: "20px",
    transform: "translate(-50%)",
    left: "50%"
  }
};
var setStateTypes = (type) => {
  return type === "info" ? toastIconLink.info : type === "success" ? toastIconLink.success : type === "error" ? toastIconLink.error : type === "warning" ? toastIconLink.warning : toastIconLink.default;
};
var setStateStyle = (position, item) => {
  const pos = position === "top-left" ? toastStyleData.topLeft : position === "top-center" ? toastStyleData.topCenter : position === "bottom-left" ? toastStyleData.bottomLeft : position === "bottom-center" ? toastStyleData.bottomCenter : position === "bottom-right" ? toastStyleData.bottomRight : toastStyleData.topRight;
  return setSpace(position, item, pos);
};
var setStateTheme = (theme, type) => {
  const themes = theme === "dark" ? themeStyle.dark : theme === "colored" ? themeStyle.colored : themeStyle.light;
  return {
    h1: themes.h1,
    h2: themes.h2,
    ...type === "info" ? themes.info : type === "success" ? themes.success : type === "error" ? themes.error : type === "warning" ? themes.warning : themes.default
  };
};
var setStateTransition = (transition, position, revers) => {
  if (transition === "slide") {
    return `0.5s linear 0s alternate ${position === "bottom-right" ? "slide-bottom-right" : position === "bottom-center" ? "slide-bottom-center" : position === "bottom-left" ? "slide-bottom-left" : position === "top-left" ? "slide-top-left" : position === "top-center" ? "slide-top-center" : "slide-top-right"}`;
  } else if (transition === "bounce") {
    return `0.5s linear 0s alternate ${position === "bottom-right" ? "bounce-bottom-right" : position === "bottom-center" ? "bounce-bottom-center" : position === "bottom-left" ? "bounce-bottom-left" : position === "top-left" ? "bounce-top-left" : position === "top-center" ? "bounce-top-center" : "bounce-top-right"}${revers}`;
  } else if (transition === "zoom") {
    return `0.5s ease alternate zoom${revers}`;
  } else if (transition === "flip") {
    return `0.5s ease alternate flip${revers}`;
  }
};
var setSpace = (position, item, pos) => {
  if (item === 0 && position.includes("top")) {
    pos.top = "20px";
    return pos;
  }
  if (item === 0 && position.includes("bottom")) {
    pos.bottom = "20px";
    return pos;
  }
  if (position.includes("top")) {
    pos.top = `${100 * item + 20}px`;
    return pos;
  }
  if (position.includes("bottom")) {
    pos.bottom = `${100 * item + 20}px`;
    return pos;
  }
};

// src/components/SvgIcon/index.tsx
var import_react2 = __toESM(require("react"));

// src/components/SvgIcon/styled.ts
var import_styled_components = __toESM(require("styled-components"));
var ImageType = (0, import_styled_components.default)("svg")`
  width: 23px;
  height: 23px;
  margin: 0px 10px 10px 10px;
`;

// src/components/SvgIcon/index.tsx
var SvgIcon = ({ path, color }) => {
  return /* @__PURE__ */ import_react2.default.createElement(ImageType, { viewBox: "0 0 25 25", color, width: "25px", height: "25px", fill: "currentColor" }, /* @__PURE__ */ import_react2.default.createElement("path", { d: path }));
};

// src/components/Toastify/styled.ts
var import_styled_components3 = __toESM(require("styled-components"));

// src/components/Toastify/animation.ts
var import_styled_components2 = __toESM(require("styled-components"));
var animationLoader = (0, import_styled_components2.default)("div")`
  @keyframes load {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;
var animation = (0, import_styled_components2.default)("div")`
  @keyframes slide-top-left {
    from {
      transform: translateX(-50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes slide-top-center {
    0% {
      transform: translate(-50%, -100vw);
    }
    100% {
      transform: translate(-50%, 0vw);
    }
  }

  @keyframes slide-top-right {
    from {
      transform: translateX(50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes slide-bottom-left {
    from {
      transform: translateX(-50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes slide-bottom-center {
    from {
      transform: translate(50%, 100vh);
    }
    to {
      transform: translate(50%, 0vh);
    }
  }

  @keyframes slide-bottom-right {
    from {
      transform: translateX(50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-top-left {
    0% {
      transform: translateX(-50vh);
    }
    50% {
      transform: translateX(5vh);
    }
    70% {
      transform: translateX(-3vh);
    }
    90% {
      transform: translateX(1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-top-center {
    0% {
      transform: translateY(-100vh);
    }
    50% {
      transform: translateY(5vh);
    }
    70% {
      transform: translateY(-3vh);
    }
    90% {
      transform: translateY(2vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes bounce-top-right {
    0% {
      transform: translateX(50vh);
    }
    50% {
      transform: translateX(-5vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-bottom-left {
    0% {
      transform: translateX(-50vh);
    }
    50% {
      transform: translateX(5vh);
    }
    70% {
      transform: translateX(-3vh);
    }
    90% {
      transform: translateX(1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-bottom-center {
    0% {
      transform: translateY(100vh);
    }
    50% {
      transform: translateY(-5vh);
    }
    70% {
      transform: translateY(3vh);
    }
    90% {
      transform: translateY(-2vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes bounce-bottom-right {
    0% {
      transform: translateX(50vh);
    }
    50% {
      transform: translateX(-5vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(400px) rotateX(-25deg) scale(1);
      animation-timing-function: ease-in;
    }
    50% {
      transform: perspective(400px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: perspective(400px) scale(1);
      animation-timing-function: ease-in;
    }
  }

  @keyframes slide-top-left-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(-50vh);
    }
  }

  @keyframes slide-top-center-reverse {
    0% {
      transform: translate(-50%, 0vw);
    }
    100% {
      transform: translate(-50%, -100vw);
    }
  }

  @keyframes slide-top-right-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(50vh);
    }
  }

  @keyframes slide-bottom-left-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(-50vh);
    }
  }

  @keyframes slide-bottom-center-reverse {
    from {
      transform: translate(50%, 0vh);
    }
    to {
      transform: translate(50%, 100vh);
    }
  }

  @keyframes slide-bottom-right-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(50vh);
    }
  }

  @keyframes bounce-top-left-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(5vh);
    }
    70% {
      transform: translateX(1vh);
    }
    90% {
      transform: translateX(-3vh);
    }
    100% {
      transform: translateX(-50vh);
    }
  }

  @keyframes bounce-top-center-reverse {
    0% {
      transform: translateY(0vh);
    }
    50% {
      transform: translateY(2vh);
    }
    70% {
      transform: translateY(-3vh);
    }
    90% {
      transform: translateY(5vh);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  @keyframes bounce-top-right-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(-1vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-5vh);
    }
    100% {
      transform: translateX(50vh);
    }
  }

  @keyframes bounce-bottom-left-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(1vh);
    }
    70% {
      transform: translateX(-3vh);
    }
    90% {
      transform: translateX(5vh);
    }
    100% {
      transform: translateX(-50vh);
    }
  }

  @keyframes bounce-bottom-center-reverse {
    0% {
      transform: translateY(0vh);
    }
    50% {
      transform: translateY(-2vh);
    }
    70% {
      transform: translateY(3vh);
    }
    90% {
      transform: translateY(-5vh);
    }
    100% {
      transform: translateY(100vh);
    }
  }

  @keyframes bounce-bottom-right-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(-1vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-5vh);
    }
    100% {
      transform: translateX(50vh);
    }
  }

  @keyframes zoom-reverse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  @keyframes flip-reverse {
    0% {
      transform: perspective(400px) scale(1);
      animation-timing-function: ease-in;
    }
    50% {
      transform: perspective(400px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: perspective(400px) rotateX(-25deg) scale(1);
      animation-timing-function: ease-in;
    }
  }
`;

// src/components/Toastify/styled.ts
var Toast = (0, import_styled_components3.default)(animation)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 312px;
  height: 85px;
  box-shadow: 0px 1px 5px 0.5px rgb(236, 236, 236);
  border-radius: 5px;
`;
var Row = (0, import_styled_components3.default)("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;
var Loader = (0, import_styled_components3.default)(animationLoader)`
  display: flex;
  animation: ${(props) => props.property}ms linear 0s alternate load;
  bottom: 0%;
  background-color: black;
  position: absolute;
  opacity: 0.1;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
var HiddenLoader = (0, import_styled_components3.default)("div")`
  display: flex;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
var Column = (0, import_styled_components3.default)("div")`
  display: flex;
  align-items: center;
`;
var CancelColumn = (0, import_styled_components3.default)("div")`
  display: flex;
  align-items: start;
  height: 20px;
`;
var Message = (0, import_styled_components3.default)("h2")`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #757575;
  margin-bottom: 7px;
`;
var Tittle = (0, import_styled_components3.default)("h1")`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-left: 10px;
  color: rgb(93, 93, 93);
  margin: 5px 0px 10px 10px;
`;
var Cancel = (0, import_styled_components3.default)("button")`
  border: 0px;
`;
var Image = (0, import_styled_components3.default)("img")`
  width: 20px;
  height: 20px;
`;

// src/components/Toastify/index.tsx
var Toastify = ({
  title,
  text,
  position,
  type,
  theme,
  transition,
  autoClose,
  deleteToast,
  id,
  item
}) => {
  const toastStyle = {
    text,
    title,
    src: setStateTypes(type),
    ...setStateTheme(theme, type),
    ...setStateStyle(position, item),
    autoClose,
    animation: setStateTransition(transition, position)
  };
  return /* @__PURE__ */ import_react3.default.createElement(Toast, { style: toastStyle }, /* @__PURE__ */ import_react3.default.createElement(Row, null, /* @__PURE__ */ import_react3.default.createElement(Column, null, /* @__PURE__ */ import_react3.default.createElement(Tittle, { style: { color: toastStyle.h1 } }, title)), /* @__PURE__ */ import_react3.default.createElement(CancelColumn, null, /* @__PURE__ */ import_react3.default.createElement(
    Cancel,
    {
      id,
      onClick: deleteToast,
      style: { backgroundColor: toastStyle.backgroundColor }
    },
    /* @__PURE__ */ import_react3.default.createElement(Image, { src: "./f", alt: "cancel" })
  ))), /* @__PURE__ */ import_react3.default.createElement(Row, null, /* @__PURE__ */ import_react3.default.createElement(Column, null, /* @__PURE__ */ import_react3.default.createElement(SvgIcon, { color: toastStyle.iconColor, path: toastStyle.src }), /* @__PURE__ */ import_react3.default.createElement(Message, { style: { color: toastStyle.h2 } }, text))), /* @__PURE__ */ import_react3.default.createElement(
    Loader,
    {
      id,
      onAnimationEnd: deleteToast,
      property: toastStyle.autoClose
    }
  ), /* @__PURE__ */ import_react3.default.createElement(HiddenLoader, { style: { backgroundColor: toastStyle.barColor } }));
};

// src/globalStyle.ts
var import_styled_components4 = require("styled-components");
var GlobalStyle = import_styled_components4.createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
`;

// src/Toast.tsx
var App = () => {
  const { toast, deleteToast } = useNotification();
  return /* @__PURE__ */ import_react4.default.createElement(import_styled_components5.ThemeProvider, { theme: themeStyle }, /* @__PURE__ */ import_react4.default.createElement(GlobalStyle, null), toast.map((el, index) => /* @__PURE__ */ import_react4.default.createElement(
    Toastify,
    {
      deleteToast,
      position: el.position,
      title: el.title,
      text: el.text,
      type: el.type,
      theme: el.theme,
      transition: el.transition,
      autoClose: el.autoClose,
      id: index,
      key: index,
      item: el.item
    }
  )));
};

// src/index.tsx
var index_default = useNotification;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
