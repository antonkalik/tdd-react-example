import { render, screen } from "@testing-library/react";
import { initCards } from "src/utils";
import { Cards } from "./index";

describe("<Cards />", () => {
  it("should render cards", () => {
    render(<Cards />);
    expect(screen.getByTestId("cards")).toMatchSnapshot();
  });

  it("should render main title", () => {
    render(<Cards />);
    expect(screen.getByText("All Cards")).toBeInTheDocument();
  });

  it("should render message with no cards", () => {
    render(<Cards />);
    expect(screen.getByText("No cards")).toBeInTheDocument();
  });

  it("should render one card", () => {
    render(
      <Cards
        cards={[
          {
            id: 1,
            title: "Card 1",
          },
        ]}
      />
    );
    const element = screen.getByTestId("card");
    expect(element).toBeInTheDocument();
    expect(screen.getByTestId("cards")).toMatchSnapshot();
    expect(element).toHaveTextContent("Card 1");
  });

  it("should render multiple cards", () => {
    render(<Cards cards={initCards} />);
    const elements = screen.getAllByTestId("card");
    expect(elements).toHaveLength(initCards.length);
  });
});
