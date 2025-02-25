import React, { createContext } from 'react';

import Toast from '../Toast';

import { NotifyProviderType, NotifyContextType } from '../types';

export const notifyContext = createContext<NotifyContextType>({
  toast: [],
  addToast: () => {},
  deleteToast: () => {},
});

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
