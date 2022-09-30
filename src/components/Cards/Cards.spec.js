import { render, screen } from "@testing-library/react";
import { initCards } from "src/__mocks__/initCards";
import { Cards } from "./index";

describe("<Cards />", () => {
  it("should render cards", () => {
    render(<Cards />);
    expect(screen.getByTestId("cards")).toMatchSnapshot();
  });

  it("should render message with no cards", () => {
    const { container } = render(<Cards />);
    const message = container.querySelector("h4");
    expect(message).toHaveTextContent("No cards");
  });

  it("should render title", () => {
    const { container } = render(<Cards />);
    const title = container.querySelector("h3");
    expect(title).toHaveTextContent("Cards");
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
    expect(element).toHaveTextContent("Card 1");
  });

  it("should render multiple cards", () => {
    render(<Cards cards={initCards} />);
    const elements = screen.getAllByTestId("card");
    expect(elements).toHaveLength(initCards.length);
  });
});
