import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Toastify } from "./Toastify";
import { themeStyle } from "./theme";

import { GlobalStyle } from "./globalStyle";

export const App = ({setToast}: any) => {
  const [notification, setNotification] = useState([
    {
      position: "bottom-right",
      title: "Wow toast",
      text: "Wow it`s easy!",
      type: "info",
      theme: "colored",
      transition: "flip",
      autoClose: "1000",
      key: 2,
    },
  ] as const);


  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      {notification.map((el, index) => (
        <Toastify
          position={el.position}
          title={el.title}
          text={el.text}
          type={el.type}
          theme={el.theme}
          transition={el.transition}
          autoClose={el.autoClose}
          key={index}
        />
      ))}
    </ThemeProvider>
  );
};
