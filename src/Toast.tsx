import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Toastify from './components/Toastify';

import { themeStyle } from './theme';
import GlobalStyle from './globalStyle';

import { ToastContextType, ToastProps } from './types';

export default function Toast({
  notifyContext,
}: {
  notifyContext: React.Context<ToastContextType>;
}) {
  const { toast, deleteToast } = useContext<ToastContextType>(notifyContext);

  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      {typeof toast !== 'undefined'
        ? toast.map((el: ToastProps) => (
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
            // eslint-disable-next-line @typescript-eslint/indent
          ))
        : undefined}
    </ThemeProvider>
  );
}
