import {
  setStateTypes,
  setStateStyle,
  setStateTheme,
  setStateTransition,
} from "../utils/utils";

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

interface ToastProps {
  title?: string;
  text?: string;
  position:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center";
  type: "info" | "success" | "warning" | "error" | "default";
  theme: "light" | "dark" | "colored";
  transition: "bounce" | "slide" | "zoom" | "flip";
  autoClose: string;
}

interface ToastStyle {
  animation?: string;
  autoClose?: string;
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
  transform?: string;
  barColor?: string;
  backgroundColor?: string;
  h1?: string;
  h2?: string;
  iconColor?: string;
  src: string;
  text?: string;
  title?: string;
}

export const Toastify = ({
  title,
  text,
  position,
  type,
  theme,
  transition,
  autoClose,
}: ToastProps) => {
  const toastStyle: ToastStyle = {
    text: text,
    title: title,
    src: setStateTypes(type),
    ...setStateTheme(theme, type),
    ...setStateStyle(position),
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
          <Cancel style={{ backgroundColor: toastStyle.backgroundColor }}>
            <Image src="./assets/cancel.png" alt="cancel" />
          </Cancel>
        </CancelColumn>
      </Row>
      <Row>
        <Column>
          <SvgIcon color={toastStyle.iconColor} path={toastStyle.src} />
          <Message style={{ color: toastStyle.h2 }}>{text}</Message>
        </Column>
      </Row>
      <Loader property={toastStyle.autoClose} />
      <HiddenLoader style={{ backgroundColor: toastStyle.barColor }} />
    </Toast>
  );
};
