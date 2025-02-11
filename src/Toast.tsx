import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Toastify } from "./components/Toastify";

import { notifyContext } from "./components/Context";

import { themeStyle } from "./theme";
import { GlobalStyle } from "./globalStyle";

export const Toast = () => {
  const toast = useContext<any>(notifyContext);
  const deleteToast = useContext(notifyContext);

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
            id={index}
            key={index}
            item={el.item}
          />
        ))}
      </ThemeProvider>
  );
};
