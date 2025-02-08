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
            <Image src="./f" alt="cancel" />
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
