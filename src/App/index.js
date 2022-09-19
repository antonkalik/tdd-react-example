import React from "react";
import { Header } from "../components/Header";
import { Body } from "../components/Body";

export function App() {
  const [cards, setCards] = React.useState([]);

  return (
    <div data-testid="app">
      <Header />
      <Body cards={cards} />
      <div data-testid="footer">Footer</div>
    </div>
  );
}
