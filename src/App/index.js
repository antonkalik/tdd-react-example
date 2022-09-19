import React from "react";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { StyledApp } from "./style";

export function App() {
  const [cards, setCards] = React.useState([]);

  return (
    <StyledApp data-testid="app">
      <Header />
      <Body cards={cards} />
      <Footer />
    </StyledApp>
  );
}
