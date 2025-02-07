import ReactDOM from "react-dom/client";
import { App } from "./App";

const setToast = () => {
  return {
    position: "top-left",
    title: "Wow pizda",
    text: "Wow it`s hui!",
    type: "success",
    theme: "light",
    transition: "flip",
    autoClose: "1000",
    key: 1,
  };
};

const div = document.createElement("div");
div.id = "toast";
document.body.append(div);

const root = ReactDOM.createRoot(
  document.getElementById("toast") as HTMLElement
);

root.render(
  <>
    <App />
  </>
);
