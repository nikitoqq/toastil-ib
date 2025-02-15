import React from "react";
import { createContext } from "react";
import { Toast } from "../toast"; // импорт ломаный

export const notifyContext = createContext([]);

export const NotifyProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) => {
  return (
    <notifyContext.Provider value={value}>
      <Toast />
      {children}
    </notifyContext.Provider>
  );
};
