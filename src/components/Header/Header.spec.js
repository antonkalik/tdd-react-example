import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./index";

describe("Header", () => {
  it("should have title", () => {
    const { container } = render(<Header />);
    expect(container).toHaveTextContent("Header");
  });
  it("should have reset button", () => {
    render(<Header />);
    const element = screen.getByRole("button", { name: "Reset" });
    expect(element).toBeInTheDocument();
  });
  it("should call onReset function", () => {
    const onReset = jest.fn();
    render(<Header onReset={onReset} />);
    const element = screen.getByRole("button", { name: "Reset" });
    userEvent.click(element);
    expect(onReset).toHaveBeenCalled();
  });
  it("should have Add button", () => {
    render(<Header />);
    const element = screen.getByRole("button", { name: "Add" });
    expect(element).toBeInTheDocument();
  });
  it("should call onAdd function", () => {
    const onAdd = jest.fn();
    render(<Header onAdd={onAdd} />);
    const element = screen.getByRole("button", { name: "Add" });
    userEvent.click(element);
    expect(onAdd).toHaveBeenCalled();
  });
  it("should render", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
