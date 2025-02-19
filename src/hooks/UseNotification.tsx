import { useState } from 'react';
import { ToastProps } from '../types';

export default function useNotification() {
  const [id, setId] = useState<string>('0');
  const [toast, setToast] = useState<ToastProps[]>();

  const deleteToast = (e: any) => {
    setToast(toast!.filter((el: any) => e.target.id !== el.id));
  };

  const addToast = (obj: ToastProps) => {
    setId(`${+id + 1}`);
    if (typeof toast === 'undefined') {
      setToast([{ ...obj, item: 0, id }]);
      return { toast, addToast, deleteToast };
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

    setToast([...toast, { ...obj, id, item }]);
    return null;
  };

  return { toast, addToast, deleteToast };
}
