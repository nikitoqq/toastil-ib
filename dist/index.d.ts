import React$1 from 'react';

interface SvgType {
    path: string;
    color?: string;
    size?: number;
}
type Position = "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";
interface ToastProps {
    title: string;
    text: string;
    position: Position;
    type: "info" | "success" | "warning" | "error" | "default";
    theme: "light" | "dark" | "colored";
    transition: "bounce" | "slide" | "zoom" | "flip";
    autoClose: string;
    deleteToast?: any;
    id?: string;
    item?: number;
}
interface NotifyContextType {
    toast?: object[];
    addToast?: any;
    deleteToast?: any;
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

declare const NotifyProvider: ({ children, value }: NotifyProviderType) => React$1.JSX.Element;

declare const useNotification: () => {
    toast: ToastProps[] | undefined;
    addToast: (obj: ToastProps) => {
        toast: undefined;
        addToast: /*elided*/ any;
        deleteToast: (e: any) => void;
        id: string;
    } | undefined;
    deleteToast: (e: any) => void;
    id: string;
};

declare const Toast: () => React$1.JSX.Element;

export { type NotifyContextType, NotifyProvider, type NotifyProviderType, type Position, type SvgType, Toast, type ToastContextType, type ToastIconLinkType, type ToastProps, type ToastStyle, type ToastStyleDataType, useNotification };
