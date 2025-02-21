'use strict';

var React2 = require('react');
var styled3 = require('styled-components');
var uuid = require('uuid');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);
var styled3__default = /*#__PURE__*/_interopDefault(styled3);

// src/context/index.tsx

// src/theme.ts
var colors = {
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
  gradient: "linear-gradient(90deg, #1dfdf7 15%, #f06b8a 30%, #82b6ea 45%, #6ae160 60%, #b280fb 75%)"
};
var spacings = {
  primary: [
    "2px",
    "4px",
    "8px",
    "16px",
    "20px",
    "24px",
    "32px",
    "40px",
    "52px"
  ]
};
var themeStyle = {
  light: {
    h1: colors.gray,
    h2: colors.lightGray,
    info: {
      iconColor: colors.blue,
      barColor: colors.lightBlue,
      backgroundColor: colors.white
    },
    success: {
      iconColor: colors.green,
      barColor: colors.lightGreen,
      backgroundColor: colors.white
    },
    warning: {
      iconColor: colors.orange,
      barColor: colors.lightOrange,
      backgroundColor: colors.white
    },
    error: {
      iconColor: colors.red,
      barColor: colors.lightRed,
      backgroundColor: colors.white
    },
    default: {
      barColor: colors.gradient,
      backgroundColor: colors.white
    }
  },
  dark: {
    h1: colors.white,
    h2: colors.beige,
    info: {
      barColor: colors.lightBlue,
      iconColor: colors.white,
      backgroundColor: colors.black
    },
    success: {
      barColor: colors.lightGreen,
      iconColor: colors.white,
      backgroundColor: colors.black
    },
    warning: {
      barColor: colors.lightOrange,
      iconColor: colors.white,
      backgroundColor: colors.black
    },
    error: {
      barColor: colors.lightRed,
      iconColor: colors.white,
      backgroundColor: colors.black
    },
    default: {
      barColor: colors.gradient,
      iconColor: colors.white,
      backgroundColor: colors.black
    }
  },
  colored: {
    h1: colors.white,
    h2: colors.beige,
    info: {
      barColor: colors.lightBlue,
      backgroundColor: colors.blue,
      iconColor: colors.white
    },
    success: {
      barColor: colors.lightGreen,
      backgroundColor: colors.green,
      iconColor: colors.white
    },
    warning: {
      barColor: colors.lightOrange,
      backgroundColor: colors.orange,
      iconColor: colors.white
    },
    error: {
      barColor: colors.lightRed,
      backgroundColor: colors.red,
      iconColor: colors.white
    },
    default: {
      barColor: colors.gradient,
      iconColor: colors.white
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
  topRight: { top: spacings.primary[4], right: "2vw" },
  topLeft: { top: spacings.primary[4], left: "2vw" },
  topCenter: {
    left: "50%",
    transform: "translate(-50%)",
    top: spacings.primary[4]
  },
  bottomRight: { bottom: spacings.primary[4], right: "2vw" },
  bottomLeft: { bottom: spacings.primary[4], left: "2vw" },
  bottomCenter: {
    bottom: spacings.primary[4],
    transform: "translate(-50%)",
    left: "50%"
  }
};
var setStateTypes = (type) => (
  // eslint-disable-next-line implicit-arrow-linebreak
  toastIconLink[type] || toastIconLink.default
);
var setSpace = (position, pos, item) => {
  if (item) {
    if (position.includes("top")) {
      return { ...pos, top: `${100 * item + 20}px` };
    }
    return { ...pos, bottom: `${100 * item + 20}px` };
  }
  return { ...pos };
};
var setStateStyle = (position, item) => {
  switch (position) {
    case "top-left":
      return setSpace(position, toastStyleData.topLeft, item);
    case "top-center":
      return setSpace(position, toastStyleData.topCenter, item);
    case "bottom-left":
      return setSpace(position, toastStyleData.bottomLeft, item);
    case "bottom-center":
      return setSpace(position, toastStyleData.bottomCenter, item);
    case "bottom-right":
      return setSpace(position, toastStyleData.bottomRight, item);
    default:
      return setSpace(position, toastStyleData.topRight, item);
  }
};
var setStateTheme = (theme, type) => {
  const themes = themeStyle[theme];
  return { h1: themes.h1, h2: themes.h2, ...themes[type] };
};
var setStateTransition = (transition, position, revers) => {
  const reversMode = typeof revers === "undefined" ? "" : revers;
  if (transition === "flip" || transition === "zoom") {
    return `0.5s ease alternate ${position.includes("center") ? `${transition}-center` : `${transition}`}${reversMode}`;
  }
  return `0.5s linear 0s alternate ${`${transition}-${position}`}${reversMode}`;
};
var styled_default = styled3__default.default("svg")`
  width: 23px;
  height: 23px;
  margin: 0px 10px 10px 10px;
`;

// src/components/SvgIcon/index.tsx
function SvgIcon({ path, color, size = 25 }) {
  return /* @__PURE__ */ React2__default.default.createElement(
    styled_default,
    {
      viewBox: "0 0 25 25",
      color,
      width: `${size}px`,
      height: `${size}px`,
      fill: "currentColor"
    },
    /* @__PURE__ */ React2__default.default.createElement("path", { d: path })
  );
}
var SvgIcon_default = SvgIcon;
var animationLoader = styled3__default.default("div")`
  @keyframes load {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;
var animation = styled3__default.default("div")`
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
    0% {
      transform: translate(-50%, 100vh);
    }
    100% {
      transform: translate(-50%, 0vh);
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
      transform: translate(-50%, -100vh);
    }
    50% {
      transform: translate(-50%, 5vh);
    }
    70% {
      transform: translate(-50%, -3vh);
    }
    90% {
      transform: translate(-50%, 2vh);
    }
    100% {
      transform: translate(-50%, 0vh);
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
      transform: translate(-50%, 100vh);
    }
    50% {
      transform: translate(-50%, -5vh);
    }
    70% {
      transform: translate(-50%, 3vh);
    }
    90% {
      transform: translate(-50%, -2vh);
    }
    100% {
      transform: translate(-50%, 0vh);
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

  @keyframes zoom-center {
    from {
      transform: scale(0) translateX(-50%);
    }
    to {
      transform: scale(1) translateX(-50%);
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

  @keyframes flip-center {
    0% {
      transform: perspective(400px) rotateX(-25deg) scale(1) translateX(-50%);
      animation-timing-function: ease-in;
    }
    50% {
      transform: perspective(400px) translateX(-50%);
      animation-timing-function: ease-out;
    }
    100% {
      transform: perspective(400px) scale(1) translateX(-50%);
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
      transform: translate(-50%, 0vh);
    }
    to {
      transform: translate(-50%, 100vh);
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
      transform: translate(-50%, 0vh);
    }
    50% {
      transform: translate(-50%, 2vh);
    }
    70% {
      transform: translate(-50%, -3vh);
    }
    90% {
      transform: translate(-50%, 5vh);
    }
    100% {
      transform: translate(-50%, -100vh);
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
      transform: translate(-50%, 0vh);
    }
    50% {
      transform: translate(-50%, -2vh);
    }
    70% {
      transform: translate(-50%, 3vh);
    }
    90% {
      transform: translate(-50%, -5vh);
    }
    100% {
      transform: translate(-50%, 100vh);
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

  @keyframes zoom-center-reverse {
    from {
      transform: scale(1) translateX(-50%);
    }
    to {
      transform: scale(0) translateX(-50%);
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

  @keyframes flip-center-reverse {
    0% {
      transform: perspective(400px) scale(1) translateX(-50%);
      animation-timing-function: ease-in;
    }
    50% {
      transform: perspective(400px) translateX(-50%);
      animation-timing-function: ease-out;
    }
    100% {
      transform: perspective(400px) rotateX(-25deg) scale(1) translateX(-50%);
      animation-timing-function: ease-in;
    }
  }
`;

// src/components/Toastify/styled.ts
var Toast = styled3__default.default(animation)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 312px;
  height: 85px;
  box-shadow: 0px 1px 5px 0.5px rgb(236, 236, 236);
  border-radius: 5px;
`;
var Row = styled3__default.default("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;
var Loader = styled3__default.default(animationLoader)`
  display: flex;
  animation: ${(props) => props.property}ms linear 0s alternate load;
  bottom: 0%;
  background-color: black;
  position: absolute;
  opacity: 0.2;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
var HiddenLoader = styled3__default.default("div")`
  display: flex;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
var Column = styled3__default.default("div")`
  display: flex;
  align-items: center;
`;
var CancelColumn = styled3__default.default("div")`
  display: flex;
  align-items: start;
  height: 20px;
`;
var Message = styled3__default.default("h2")`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #757575;
  margin-bottom: 7px;
`;
var Tittle = styled3__default.default("h1")`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-left: 10px;
  color: rgb(93, 93, 93);
  margin: 5px 0px 10px 10px;
`;
var Cancel = styled3__default.default("button")`
  border: 0px;
  width: 25px;
  height: 25px;
`;
styled3__default.default("img")`
  width: 20px;
  height: 20px;
`;

// src/components/Toastify/index.tsx
var CANCEL_SVG_PATH = "M7.71 8.23l3.753.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z";
function Toastify({
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
}) {
  const [toastStyle, setToast] = React2.useState({
    text,
    title,
    src: setStateTypes(type),
    ...setStateTheme(theme, type),
    ...setStateStyle(position, item),
    autoClose,
    animation: setStateTransition(transition, position)
  });
  const funcDelete = (target) => {
    setToast({
      ...toastStyle,
      animation: setStateTransition(transition, position, "-reverse")
    });
    setTimeout(() => {
      deleteToast(target.id);
    }, 500);
  };
  return /* @__PURE__ */ React2__default.default.createElement(Toast, { style: toastStyle }, /* @__PURE__ */ React2__default.default.createElement(Row, null, /* @__PURE__ */ React2__default.default.createElement(Column, null, /* @__PURE__ */ React2__default.default.createElement(Tittle, { style: { color: toastStyle.h1 } }, title)), /* @__PURE__ */ React2__default.default.createElement(CancelColumn, null, /* @__PURE__ */ React2__default.default.createElement(
    Cancel,
    {
      onClick: (e) => funcDelete(e.target),
      id,
      style: { backgroundColor: toastStyle.backgroundColor }
    },
    /* @__PURE__ */ React2__default.default.createElement(SvgIcon_default, { color: "gray", size: 25, path: CANCEL_SVG_PATH })
  ))), /* @__PURE__ */ React2__default.default.createElement(Row, null, /* @__PURE__ */ React2__default.default.createElement(Column, null, /* @__PURE__ */ React2__default.default.createElement(SvgIcon_default, { color: toastStyle.iconColor, path: toastStyle.src }), /* @__PURE__ */ React2__default.default.createElement(Message, { style: { color: toastStyle.h2 } }, text))), /* @__PURE__ */ React2__default.default.createElement(
    Loader,
    {
      id,
      onAnimationEnd: (e) => funcDelete(e.target),
      property: toastStyle.autoClose
    }
  ), /* @__PURE__ */ React2__default.default.createElement(HiddenLoader, { style: { background: toastStyle.barColor } }));
}
var globalStyle_default = styled3.createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
`;

// src/Toast.tsx
function Toast2({
  notifyContext: notifyContext2
}) {
  const { toast, deleteToast } = React2.useContext(notifyContext2);
  return /* @__PURE__ */ React2__default.default.createElement(styled3.ThemeProvider, { theme: themeStyle }, /* @__PURE__ */ React2__default.default.createElement(globalStyle_default, null), typeof toast !== "undefined" ? toast.map((el) => (
    // eslint-disable-next-line react/jsx-indent
    /* @__PURE__ */ React2__default.default.createElement(
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
        id: el.id,
        key: el.id,
        item: el.item
      }
    )
  )) : void 0);
}

// src/context/index.tsx
var notifyContext = React2.createContext({
  toast: [],
  addToast: () => {
  },
  deleteToast: () => {
  }
});
function NotifyProvider({
  children,
  value
}) {
  return /* @__PURE__ */ React2__default.default.createElement(notifyContext.Provider, { value }, /* @__PURE__ */ React2__default.default.createElement(Toast2, { notifyContext }), children);
}
function useNotification() {
  const [toast, setToast] = React2.useState();
  const id = uuid.v4();
  const deleteToast = (targetId) => {
    setToast((prev) => prev.filter((el) => targetId !== el.id));
  };
  const addToast = (obj) => {
    if (typeof toast === "undefined") {
      setToast([{ ...obj, item: 0, id }]);
    } else {
      const item = toast.reduce(
        (acc, cur) => {
          if (cur.position === obj.position) {
            acc += 1;
          }
          return acc;
        },
        0
      );
      setToast((prev) => [...prev, { ...obj, id, item }]);
    }
  };
  return { toast, addToast, deleteToast };
}

exports.NotifyProvider = NotifyProvider;
exports.Toast = Toast2;
exports.useNotification = useNotification;
