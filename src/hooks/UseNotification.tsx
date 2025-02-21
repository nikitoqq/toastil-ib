/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react';

import { v4 as uuidv4, UUIDTypes } from 'uuid';

import { ToastProps } from '../types';

export default function useNotification() {
  const [toast, setToast] = useState<ToastProps[]>();

  const id: UUIDTypes = uuidv4();

  const deleteToast = (
    e:
      | React.BaseSyntheticEvent<HTMLButtonElement>
      | React.BaseSyntheticEvent<HTMLDivElement>,
  ) => {
    setToast((prev) => prev!.filter((el: ToastProps) => e.target.id !== el.id));
    return { toast };
  };

  const addToast = (obj: ToastProps) => {
    if (typeof toast === 'undefined') {
      setToast([{ ...obj, item: 0, id }]);
      return { toast };
    }

    const item: number = toast.reduce(
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
    return toast;
  };

  return { toast, addToast, deleteToast };
}
