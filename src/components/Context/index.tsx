import React from "react";
import { createContext } from "react";
import { useNotification } from "../../hooks/UseNotification";
import { NotifyContextType } from "../../types";

export const notifyContext = createContext<NotifyContextType>({});

export const NotifyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
  value: any;
}) => {
  const { toast, addToast, deleteToast } = useNotification();
  const value = {
    toast,
    addToast,
    deleteToast,
  };
  return (
    <notifyContext.Provider value={value}>{children}</notifyContext.Provider>
  );
};
