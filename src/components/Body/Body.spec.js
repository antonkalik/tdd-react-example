import { render, screen } from "@testing-library/react";
import { Body } from "./index";

describe("Body", () => {
  beforeEach(() => {
    render(<Body />);
  });

  it("should render body", () => {
    expect(screen.getByTestId("body")).toMatchSnapshot();
  });

  it("should render cards", () => {
    const element = screen.getByTestId("cards");
    expect(element).toBeInTheDocument();
  });

  it("should render message with no cards", () => {
    const element = screen.getByTestId("no-cards-message");
    expect(element).toBeInTheDocument();
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
});
