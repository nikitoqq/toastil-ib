import { useState } from "react";
import { ToastProps } from "../types";

export const useNotification = () => {
  const [id, setId] = useState<string>("0");
  const [toast, setToast] = useState<any>([]);

  const deleteToast = (e: any) => {
    setToast((prev: object[]) =>
      prev.filter((el: any) => {
        return e.target.id !== el.id;
      })
    );
  };

  const addToast = (obj: ToastProps) => {
    obj.id = ` ${id}`;
    setId((prev) => `${+prev + 1}`);
    if (toast.length === 0) {
      obj.item = 0;
      setToast([obj]);
      return { toast, addToast, deleteToast };
    }

    const itemPos = toast.reduce((acc: number, cur: any) => {
      if (cur.position === obj.position) {
        acc += 1;
      }
      return acc;
    }, 0);

    obj.item = itemPos;
    setToast((prev: object[]) => [...prev, obj]);
  };

  return { toast, addToast, deleteToast };
};
