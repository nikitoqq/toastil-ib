/* eslint-disable @typescript-eslint/indent */
export interface SvgType {
  id?: string;
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
  title?: string;
  text: string;
  position: Position;
  type: Type;
  theme: Theme;
  transition: Transition;
  autoClose: number;
  deleteToast?: (targetId: string) => void;
  id?: string;
}

export interface ToastSetting {
  animation?: string;
  autoClose: number;
  margin: string;
  transform?: string;
  barColor?: string;
  backgroundColor?: string;
  h1?: string;
  h2?: string;
  iconColor?: string;
  type: string;
  text: string;
  title?: string;
  id?: string;
}

export interface ToastPositionType {
  top?: string;
  right?: string;
  left?: string;
  transform?: string;
  bottom?: string;
}

export interface NotifyContextType {
  toast?: ToastProps[];
  addToast: (obj: ToastProps) => void;
  deleteToast: (targetId: string) => void;
}

export interface NotifyProviderType {
  children: React.ReactNode;
  value: NotifyContextType;
}

export interface ToastContext {
  notifyContext: React.Context<NotifyContextType>;
}
