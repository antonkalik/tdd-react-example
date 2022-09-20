import { render, screen } from "@testing-library/react";
import { initCards } from "src/__mocks__/initCards";
import { Body } from "./index";

describe("Body", () => {
  it("should render body", () => {
    render(<Body />);
    expect(screen.getByTestId("body")).toMatchSnapshot();
  });

  it("should render message with no cards", () => {
    const { container } = render(<Body />);
    const message = container.querySelector("h4");
    expect(message).toHaveTextContent("No cards");
  });

  it("should render title", () => {
    const { container } = render(<Body />);
    const title = container.querySelector("h3");
    expect(title).toHaveTextContent("Cards");
  });

  it("should render one card", () => {
    render(
      <Body
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
    render(<Body cards={initCards} />);
    const elements = screen.getAllByTestId("card");
    expect(elements).toHaveLength(initCards.length);
  });
});
