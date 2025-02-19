import React, { createContext } from 'react';

import Toast from '../Toast';

import { NotifyProviderType, ToastContextType } from '../types';

export const notifyContext = createContext<ToastContextType>({});

export default function NotifyProvider({
  children,
  value,
}: NotifyProviderType) {
  return (
    <notifyContext.Provider value={value}>
      <Toast notifyContext={notifyContext} />
      {children}
    </notifyContext.Provider>
  );
}
