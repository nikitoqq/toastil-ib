import React from 'react';

interface SvgType {
    path: string;
    color?: string;
}
interface ToastProps {
    title: string;
    text: string;
    position: "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";
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
}

declare const useNotification: () => {
    toast: any;
    addToast: (obj: ToastProps) => {
        toast: any;
        addToast: /*elided*/ any;
        deleteToast: (e: any) => void;
    } | undefined;
    deleteToast: (e: any) => void;
};

declare const notifyContext: React.Context<never[]>;
declare const NotifyProvider: ({ children, value, }: {
    children: React.ReactNode;
    value: any;
}) => React.JSX.Element;

declare const Toast: () => React.JSX.Element;

export { type NotifyContextType, NotifyProvider, type SvgType, Toast, type ToastProps, type ToastStyle, useNotification as default, notifyContext };
