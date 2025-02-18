import { useState } from "react";
import { ToastProps } from "../types";

export const useNotification = () => {
  const [id, setId] = useState<string>("0");
  const [toast, setToast] = useState<ToastProps[]>();

  var deleteToast = (e: any) => {
    setToast((prevState: ToastProps[] | undefined) =>
      prevState
        ? prevState.filter((el: any) => e.target.id !== el.id)
        : undefined
    );
  };

  const addToast = (obj: ToastProps) => {
    setId(`${+id + 1}`);
    if (typeof toast === "undefined") {
      [obj.item, obj.id] = [0, id];

      setToast([obj]);
      return { toast, addToast, deleteToast, id };
    }

    const itemPos = toast.reduce((acc: number, cur: any) => {
      return cur.position === obj.position ? (acc += 1) : acc;
    }, 0);

    [obj.id, obj.item] = [id, itemPos];

    setToast((prevState: ToastProps[] | undefined) =>
      prevState ? [...prevState, obj] : undefined
    );
  };

  return { toast, addToast, deleteToast, id };
};
