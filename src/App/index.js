import React from "react";
import { Header } from "src/components/Header";
import { Body } from "src/components/Body";
import { Footer } from "src/components/Footer";
import { useCards } from "src/hooks/useCards";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { StyledApp } from "./style";
import { initCards } from "../__mocks__/initCards";

export function App() {
  const { cards, removeCard } = useCards(initCards);

  return (
    <StyledApp data-testid="app">
      <Header />
      <Body cards={cards} removeCard={removeCard} />
      <Footer />
    </StyledApp>
  );
}
