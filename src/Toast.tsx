import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Toastify } from "./components/Toastify";

import { themeStyle } from "./theme";
import { GlobalStyle } from "./globalStyle";
import { useNotification } from "./hooks/UseNotification";
import { notifyContext, NotifyContextProvider } from "./context";

export const Toast = () => {
  const {toast, addToast, deleteToast} = useNotification();
  

  return (
    <NotifyContextProvider value={{toast, addToast}}>
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
            item={el.item}
          />
        ))}
      </ThemeProvider>
    </NotifyContextProvider>
  );
};
