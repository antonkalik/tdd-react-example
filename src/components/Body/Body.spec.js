import { render, screen } from "@testing-library/react";
import { Body } from "./index";

describe("Body", () => {
  it("should render body", () => {
    render(<Body />);
    expect(screen.getByTestId("body")).toMatchSnapshot();
  });

  it("should render message with no cards", () => {
    render(<Body />);
    const element = screen.getByTestId("no-cards-message");
    expect(element).toBeInTheDocument();
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
});
