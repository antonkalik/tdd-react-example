import { render, screen } from "@testing-library/react";
import { AppContext } from "src/context";
import { CardView } from "./index";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: 9,
  }),
}));

describe("<CardView />", () => {
  it("should render the card view", () => {
    const { getByTestId } = render(
      <AppContext.Provider
        value={{
          state: {
            cards: [
              {
                id: 9,
                title: "Card 9",
              },
            ],
          },
        }}
      >
        <CardView />
      </AppContext.Provider>
    );
    expect(getByTestId("card-view")).toMatchSnapshot();
    expect(getByTestId("card-view")).toHaveTextContent("Card 9");
  });

  it("should show not found", () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{ state: { cards: [] } }}>
        <CardView />
      </AppContext.Provider>
    );
    expect(getByTestId("card-view")).toMatchSnapshot();
    expect(getByTestId("card-view")).toHaveTextContent("Card not found");
  });
});
