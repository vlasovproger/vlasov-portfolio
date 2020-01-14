import React from "react";
import { UiStore, WorksStore } from "../stores/";
import { portfolioService } from "../services";

export const storesContext = React.createContext({
  uiStore: new UiStore(),
  worksStore: new WorksStore(),
});

export const serviceContext = React.createContext({
  portfolioService: new portfolioService()
});
