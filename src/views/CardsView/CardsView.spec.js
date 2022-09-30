import { render, screen } from "@testing-library/react";
import { AppContext } from "src/context";
import { initCards } from "src/__mocks__/initCards";
import { CardsView } from "./index";

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
