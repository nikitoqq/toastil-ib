import React from "react";
import { ThemeProvider } from "styled-components";

import { Toastify } from "./components/Toastify";
import { themeStyle } from "./theme";

import { GlobalStyle } from "./globalStyle";
import { UseNotification } from "./hooks/UseNotification";

export const App = () => {
  const { addToast, deleteToast, toast } = UseNotification();
  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      {toast.map((el: any, index: any) => (
        <Toastify
          deleteToast={deleteToast}
          position={el.position}
          title={el.title}
          text={el.text}
          type={el.type}
          theme={el.theme}
          transition={el.transition}
          autoClose={el.autoClose}
          id={el.key}
          item={el.item}
        />
      ))}
    </ThemeProvider>
  );
};
