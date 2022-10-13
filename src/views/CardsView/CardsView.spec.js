import { render, screen } from "@testing-library/react";
import { AppContext } from "src/context";
import { CardsView } from "./index";

const initCards = Array.from({ length: 5 }, (_, i) => ({
  title: `Test Card ${i + 1}`,
  id: i + 1,
}));

jest.mock("src/components/Cards", () => ({
  Cards: ({ cards }) => <div data-testid="cards">{cards.length}</div>,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const value = {
  state: { cards: [] },
  actions: {
    removeCard: jest.fn(),
  },
};

describe("<CardsView />", () => {
  it("should render cards view", () => {
    render(
      <AppContext.Provider value={value}>
        <CardsView />
      </AppContext.Provider>
    );
    expect(screen.getByTestId("cards-view")).toMatchSnapshot();
    expect(screen.getByTestId("cards")).toHaveTextContent("0");
  });

  it("should render 5 cards", () => {
    render(
      <AppContext.Provider
        value={{
          ...value,
          state: {
            cards: initCards,
          },
        }}
      >
        <CardsView />
      </AppContext.Provider>
    );
    expect(screen.getByTestId("cards")).toHaveTextContent(
      `${initCards.length}`
    );
  });
});
