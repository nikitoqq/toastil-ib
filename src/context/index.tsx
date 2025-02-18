import React, { createContext } from "react";

import { Toast } from "../Toast";

import { NotifyProviderType, ToastContextType } from "../types";

export const notifyContext = createContext<ToastContextType>({});

export const NotifyProvider = ({ children, value }: NotifyProviderType) => {
  return (
    <notifyContext.Provider value={value}>
      <Toast />
      {children}
    </notifyContext.Provider>
  );
};
