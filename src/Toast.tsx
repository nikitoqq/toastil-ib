import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Toastify } from "./components/Toastify";

import { notifyContext } from "./context";

import { themeStyle } from "./theme";
import { GlobalStyle } from "./globalStyle";

export const Toast = () => {
  const { toast, deleteToast } = useContext<any>(notifyContext); // any

  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      {toast.map(
        (
          el: any // any
        ) => (
          <Toastify
            deleteToast={deleteToast}
            position={el.position}
            title={el.title}
            text={el.text}
            type={el.type}
            theme={el.theme}
            transition={el.transition}
            autoClose={el.autoClose}
            id={el.id}
            key={el.id}
            item={el.item}
          />
        )
      )}
    </ThemeProvider>
  );
};
