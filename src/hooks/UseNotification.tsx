/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/indent */
import { useState } from 'react';

import { v4 as uuidv4, UUIDTypes } from 'uuid';

import { ToastContextType, ToastProps } from '../types';

export default function useNotification(): ToastContextType {
  const [toast, setToast] = useState<ToastProps[]>();

  const id: UUIDTypes = uuidv4();

  const deleteToast = (targetId: string) => {
    setToast((prev) => prev!.filter((el: ToastProps) => targetId !== el.id));
  };

  const addToast = (obj: ToastProps) => {
    if (typeof toast === 'undefined') {
      setToast([{ ...obj, item: 0, id }]);
    } else {
      const item: number = toast!.reduce(
        (acc: number, cur: ToastProps): number => {
          if (cur.position === obj.position) {
            // eslint-disable-next-line no-param-reassign
            acc += 1;
          }
          return acc;
        },
        0,
      );

      setToast((prev) => [...prev!, { ...obj, id, item }]);
    }
  };

  return { toast, addToast, deleteToast };
}
