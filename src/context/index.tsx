import React from "react";
import { createContext } from "react";

export const notifyContext = createContext([]);

export const NotifyContextProvider = ({
  children,
  value
}: {
  children: React.ReactNode;
  value: any;
}) => {

  return (
    <notifyContext.Provider value={value}>
      {children}
    </notifyContext.Provider>
  );
};
