import { useState } from 'react';

import { v4 as uuidv4, UUIDTypes } from 'uuid';

import { NotifyContextType, ToastProps } from '../types';

export default function useNotification(): NotifyContextType {
  const [toast, setToast] = useState<ToastProps[]>();

  const id: UUIDTypes = uuidv4();

  const deleteToast = (targetId: string) => {
    setToast((prev) => prev!.filter((el: ToastProps) => targetId !== el.id));
  };

  const addToast = (obj: ToastProps) => {
    setToast((prev) => (prev ? [...prev, { ...obj, id }] : [{ ...obj, id }]));
  };

  return { toast, addToast, deleteToast };
}
