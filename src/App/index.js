import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "src/Routes";
import { StyledApp } from "./style";

export function App() {
  return (
    <StyledApp data-testid="app">
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </StyledApp>
  );
}
