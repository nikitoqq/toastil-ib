import { useEffect, useState } from "react";
import { ToastProps } from "../types";

export const UseNotification = () => {
  const [toast, setToast] = useState<object[]>([]);

  const deleteToast = (e: any) =>
    setToast((prev: object[]) => prev.filter((el: any) => el.key !== e.target.id));

  const addToast = (obj: ToastProps) => {
    if (toast.length === 0) {
      obj.item = 0;
      return setToast((prev: object[]) => [...prev, obj]);
    }
    const itemPos = toast.reduce((acc: number, cur: any) => {
      if (cur.position === obj.position) {
        acc += 1;
      }
      return acc;
    }, 0);
    obj.item = itemPos;
    return setToast((prev: object[]) => [...prev, obj]);
  };
  return { addToast, deleteToast, toast };
};
