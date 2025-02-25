import React$1 from 'react';

interface SvgType {
    id?: string;
    path: string;
    color?: string;
    size?: number;
}
type Position = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
type Type = 'info' | 'success' | 'warning' | 'error' | 'default';
type Theme = 'light' | 'dark' | 'colored';
type Transition = 'bounce' | 'slide' | 'zoom' | 'flip';
interface ToastProps {
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
interface ToastSetting {
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
interface ToastPositionType {
    top?: string;
    right?: string;
    left?: string;
    transform?: string;
    bottom?: string;
}
interface NotifyContextType {
    toast?: ToastProps[];
    addToast: (obj: ToastProps) => void;
    deleteToast: (targetId: string) => void;
}
interface NotifyProviderType {
    children: React.ReactNode;
    value: NotifyContextType;
}
interface ToastContext {
    notifyContext: React.Context<NotifyContextType>;
}

declare function NotifyProvider({ children, value, }: NotifyProviderType): React$1.JSX.Element;

declare function useNotification(): NotifyContextType;

declare function Toast({ notifyContext }: ToastContext): React$1.JSX.Element;

export { type NotifyContextType, NotifyProvider, type NotifyProviderType, type Position, type SvgType, type Theme, Toast, type ToastContext, type ToastPositionType, type ToastProps, type ToastSetting, type Transition, type Type, useNotification };
