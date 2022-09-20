import { render, screen } from "@testing-library/react";
import { Card } from "./index";
import userEvent from "@testing-library/user-event";

describe("Card", () => {
  const cardTitle = "Card Title";
  const cardId = 2;

  it("should render Card", () => {
    render(<Card />);
    expect(screen.getByTestId("card")).toMatchSnapshot();
  });

  it("should render Card with title", () => {
    const { container } = render(<Card title={cardTitle} />);
    const title = container.querySelector("h5");
    expect(title).toHaveTextContent(cardTitle);
  });

  it("should call onRemove function", () => {
    const onRemove = jest.fn();
    render(<Card onRemove={onRemove} id={cardId} />);
    const element = screen.getByRole("button", { name: "Remove" });
    userEvent.click(element);
    expect(onRemove).toHaveBeenCalledWith(cardId);
  });

  it("should render Card without button if onRemove is not passed", () => {
    render(<Card />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
