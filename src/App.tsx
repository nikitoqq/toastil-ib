import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Toastify } from "./Toastify";
import { themeStyle } from "./theme";

import { GlobalStyle } from "./globalStyle";

export const App = () => {
  const [toast, setToast] = useState<object[]>([]);

  const deleteToast = (e: any) =>
    setToast((prev: any) => prev.filter((el: any) => el.key !== e.target.id));

  const add = (biba: any) => {
    if (toast.length === 0) {
      biba.item = 0;
      return setToast((prev: any) => [...prev, biba]);
    }

    const itemPos = toast.reduce((acc: any, cur: any) => {
      if (cur.position === biba.position) {
        acc += 1;
      }
      return acc;
    }, 0);
    biba.item = itemPos;

    setToast((prev: any) => [...prev, biba]);
  };

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
          key={index}
        />
      ))}
      <button
        onClick={() =>
          add({
            position: "top-center",
            title: "Wow toast",
            text: "Wow it`s easy!",
            type: "warning",
            theme: "dark",
            transition: "slide",
            autoClose: "1000",
            key: "1",
          })
        }
        style={{ width: "200px", height: "100px" }}
      ></button>
    </ThemeProvider>
  );
};
