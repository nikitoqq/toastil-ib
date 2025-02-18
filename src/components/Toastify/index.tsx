import React, { useState } from "react";
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
  Tittle,
  HiddenLoader,
} from "./styled";

import { ToastProps, ToastStyle } from "../../types";

const CANCEL_SVG_PATH =
  "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z";

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
  const [toastStyle, setToast] = useState<ToastStyle>({
    text: text,
    title: title,
    src: setStateTypes(type),
    ...setStateTheme(theme, type),
    ...setStateStyle(position, item),
    autoClose: autoClose,
    animation: setStateTransition(transition, position),
  });

  const funcDelete = (e: any) => {
    setToast({
      ...toastStyle,
      animation: setStateTransition(transition, position, "-reverse"),
    });
    console.log(toastStyle.animation);
    setTimeout(() => {
      deleteToast(e);
    }, 500);
  };

  return (
    <Toast style={toastStyle}>
      <Row>
        <Column>
          <Tittle style={{ color: toastStyle.h1 }}>{title}</Tittle>
        </Column>
        <CancelColumn>
          <Cancel
            onClick={funcDelete}
            style={{ backgroundColor: toastStyle.backgroundColor }}
          >
            <SvgIcon color="gray" size={25} path={CANCEL_SVG_PATH} />
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
        onAnimationEnd={funcDelete}
        property={toastStyle.autoClose}
      />
      <HiddenLoader style={{ background: toastStyle.barColor }} />
    </Toast>
  );
};
