import React$1 from 'react';

interface SvgType {
    path: string;
    color?: string;
    size?: number;
}
type Position = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
type Type = 'info' | 'success' | 'warning' | 'error' | 'default';
type Theme = 'light' | 'dark' | 'colored';
type Transition = 'bounce' | 'slide' | 'zoom' | 'flip';
interface ToastProps {
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
    id?: string;
}
interface ToastStyleDataType {
    top?: string;
    right?: string;
    left?: string;
    transform?: string;
    bottom?: string;
}
interface ToastContextType {
    toast?: ToastProps[];
    addToast?: React.Dispatch<React.SetStateAction<ToastProps>>;
    deleteToast?: React.Dispatch<React.SetStateAction<ToastProps>>;
}
interface NotifyProviderType {
    children: React.ReactNode;
    value: ToastContextType;
}
interface ToastIconLinkType {
    info: string;
    error: string;
    success: string;
    warning: string;
    default: string;
}

declare function NotifyProvider({ children, value, }: NotifyProviderType): React$1.JSX.Element;

declare function useNotification(): {
    toast: ToastProps[] | undefined;
    addToast: (obj: ToastProps) => ToastProps[] | {
        toast: undefined;
    };
    deleteToast: (e: React$1.BaseSyntheticEvent<HTMLButtonElement> | React$1.BaseSyntheticEvent<HTMLDivElement>) => {
        toast: ToastProps[] | undefined;
    };
};

declare function Toast({ notifyContext, }: {
    notifyContext: React$1.Context<ToastContextType>;
}): React$1.JSX.Element;

export { NotifyProvider, type NotifyProviderType, type Position, type SvgType, type Theme, Toast, type ToastContextType, type ToastIconLinkType, type ToastProps, type ToastStyle, type ToastStyleDataType, type Transition, type Type, useNotification };
