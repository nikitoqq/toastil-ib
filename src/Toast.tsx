/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-confusing-arrow */
/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/indent */

import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import Toastify from './components/Toastify';

import { themeStyle } from './theme';
import GlobalStyle from './globalStyle';

import { NotifyContextType, ToastContext, ToastProps } from './types';
import { PORTAL_CLASS } from './constants';

export default function Toast({ notifyContext }: ToastContext) {
  const { toast, deleteToast } = useContext<NotifyContextType>(notifyContext);

  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      {PORTAL_CLASS.map((pos) =>
        toast
          ? createPortal(
              toast.map((el: ToastProps) =>
                pos === el.position ? (
                  <Toastify
                    deleteToast={deleteToast!}
                    position={el.position}
                    title={el.title}
                    text={el.text}
                    type={el.type}
                    theme={el.theme}
                    transition={el.transition}
                    autoClose={el.autoClose}
                    id={el.id}
                    key={el.id}
                  />
                ) : undefined,
              ),
              document.getElementById(`portal-${pos}`) as HTMLElement,
            )
          : undefined,
      )}
    </ThemeProvider>
  );
}
