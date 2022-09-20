import React from "react";
import { Header } from "src/components/Header";
import { Body } from "src/components/Body";
import { Footer } from "src/components/Footer";
import { useCards } from "src/hooks/useCards";
import { StyledApp } from "./style";

export function App() {
  const result = useCards();

  return (
    <StyledApp data-testid="app">
      <Header />
      <Body cards={result.cards} />
      <Footer />
    </StyledApp>
  );
}
