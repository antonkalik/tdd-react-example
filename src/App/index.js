import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "src/Routes";
import { StyledApp } from "./style";
import ContextProvider from "../context";

export function App() {
  return (
    <StyledApp data-testid="app">
      <ContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ContextProvider>
    </StyledApp>
  );
}
