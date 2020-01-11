import React from "react";
import { UiStore } from "../stores/";

export const storesContext = React.createContext({
  uiStore: new UiStore()
});
