import React from "react";
import { UiStore } from "../stores/";
import { portfolioService } from "../services";

export const storesContext = React.createContext({
  uiStore: new UiStore()
});

export const serviceContext = React.createContext({
  portfolioService: new portfolioService()
});
