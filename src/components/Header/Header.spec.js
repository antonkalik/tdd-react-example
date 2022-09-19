import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./index";

describe("Header", () => {
  it("should render Header", () => {
    render(<Header />)
    expect(screen.getByTestId("header")).toMatchSnapshot();
  });

  it("should have title", () => {
    const { container } = render(<Header />);
    expect(container).toHaveTextContent("Logo Title");
  });

  it("should have controls", () => {
    render(<Header />);
    const resetButton = screen.getByRole("button", { name: "Reset" });
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(resetButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("should call onReset function", () => {
    const onReset = jest.fn();
    render(<Header onReset={onReset} />);
    const element = screen.getByRole("button", { name: "Reset" });
    userEvent.click(element);
    expect(onReset).toHaveBeenCalled();
  });

  it("should call onAdd function", () => {
    const onAdd = jest.fn();
    render(<Header onAdd={onAdd} />);
    const element = screen.getByRole("button", { name: "Add" });
    userEvent.click(element);
    expect(onAdd).toHaveBeenCalled();
  });
});
