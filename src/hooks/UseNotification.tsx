import { useContext, useState } from "react";
import { notifyContext } from "../context";
import { ToastProps } from "../types";

export const useNotification = () => {
  const [id, setId] = useState<string>("0");
  const [toast, setToast] = useState<any>([]);

  const deleteToast = (e: any) => {
    setToast((prev: object[]) =>
      prev.filter((el: any) => el.id !== e.target.id)
    );
  };

  const addToast = (obj: ToastProps) => {
    setId((prev) => `${+prev + 1}`);
    if (toast.length === 0) {
      obj.item = 0;
      setToast((prev: object[]) => [...prev, obj]);
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
