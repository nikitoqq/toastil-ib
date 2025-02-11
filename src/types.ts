export interface SvgType {
  path: string;
  color?: string;
}

export interface ToastProps {
  title: string;
  text: string;
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
  deleteToast?: any;
  id?: string;
  item?: number;
}

export interface NotifyContextType {
  toast?: object[],
  addToast?: any,
  deleteToast?: any
}

export interface ToastStyle {
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
