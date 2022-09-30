import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "src/Routes";
import { StyledApp } from "./style";
import StoreProvider from "../context";

export function App() {
  return (
    <StyledApp data-testid="app">
      <StoreProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StoreProvider>
    </StyledApp>
  );
}
