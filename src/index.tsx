import React from "react";
import { App } from "./App";
import { createPortal } from "react-dom";
import { UseNotification } from "./hooks/UseNotification";

export * from './hooks/UseNotification'
export * from'./types'

createPortal(<App />, document.body);
