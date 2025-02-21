export interface SvgType {
  path: string;
  color?: string;
  size?: number;
}

export type Position =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export type Type = 'info' | 'success' | 'warning' | 'error' | 'default';

export type Theme = 'light' | 'dark' | 'colored';

export type Transition = 'bounce' | 'slide' | 'zoom' | 'flip';

export interface ToastProps {
  title: string;
  text: string;
  position: Position;
  type: Type;
  theme: Theme;
  transition: Transition;
  autoClose: string;
  deleteToast: React.Dispatch<React.SetStateAction<ToastProps>>;
  id?: string;
  item?: number;
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
  id?: string;
}

export interface ToastStyleDataType {
  top?: string;
  right?: string;
  left?: string;
  transform?: string;
  bottom?: string;
}

export interface ToastContextType {
  toast?: ToastProps[];
  addToast?: React.Dispatch<React.SetStateAction<ToastProps>>;
  deleteToast?: React.Dispatch<React.SetStateAction<ToastProps>>;
}

export interface NotifyProviderType {
  children: React.ReactNode;
  value: ToastContextType;
}

export interface ToastIconLinkType {
  info: string;
  error: string;
  success: string;
  warning: string;
  default: string;
}
