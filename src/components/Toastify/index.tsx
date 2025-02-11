import React from "react";
import {
  setStateTypes,
  setStateStyle,
  setStateTheme,
  setStateTransition,
} from "../../utils/utils";

import { SvgIcon } from "../SvgIcon";

import {
  Toast,
  Column,
  Message,
  Row,
  Loader,
  Cancel,
  CancelColumn,
  Image,
  Tittle,
  HiddenLoader,
} from "./styled";
import { ToastProps, ToastStyle } from "../../types";

export const Toastify = ({
  title,
  text,
  position,
  type,
  theme,
  transition,
  autoClose,
  deleteToast,
  id,
  item,
}: ToastProps) => {
  const toastStyle: ToastStyle = {
    text: text,
    title: title,
    src: setStateTypes(type),
    ...setStateTheme(theme, type),
    ...setStateStyle(position, item),
    autoClose: autoClose,
    animation: setStateTransition(transition, position),
  };

  return (
    <Toast style={toastStyle}>
      <Row>
        <Column>
          <Tittle style={{ color: toastStyle.h1 }}>{title}</Tittle>
        </Column>
        <CancelColumn>
          <Cancel
            id={id}
            onClick={deleteToast}
            style={{ backgroundColor: toastStyle.backgroundColor }}
          >
            <svg
              viewBox="0 0 25 25"
              color="gray"
              width="25px"
              height="25px"
              fill="currentColor"
            >
              <path d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"></path>
            </svg>
          </Cancel>
        </CancelColumn>
      </Row>
      <Row>
        <Column>
          <SvgIcon color={toastStyle.iconColor} path={toastStyle.src} />
          <Message style={{ color: toastStyle.h2 }}>{text}</Message>
        </Column>
      </Row>
      <Loader
        id={id}
        onAnimationEnd={deleteToast}
        property={toastStyle.autoClose}
      />
      <HiddenLoader style={{ backgroundColor: toastStyle.barColor }} />
    </Toast>
  );
};
