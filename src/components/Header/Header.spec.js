import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Header } from "./index";
import { MemoryRouter } from "react-router-dom";

const header = (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);

describe("<Header />", () => {
  it("should render Header", () => {
    render(header);
    expect(screen.getByTestId("header")).toMatchSnapshot();
  });

  it("should have title", () => {
    const { container } = render(header);
    expect(container).toHaveTextContent("Logo Title");
  });

  it("should render controls in correct view", () => {
    render(
      <MemoryRouter initialEntries={["/cards"]}>
        <Header />
      </MemoryRouter>
    );
    const resetButton = screen.getByRole("button", { name: "Reset" });
    const addButton = screen.getByRole("button", { name: "Add" });
    const buttons = screen.getByTestId("header-buttons");

    expect(resetButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(buttons).toBeInTheDocument();
  });

  it("should call onReset function", () => {
    const onReset = jest.fn();
    render(
      <MemoryRouter initialEntries={["/cards"]}>
        <Header onReset={onReset} />
      </MemoryRouter>
    );
    const element = screen.getByRole("button", { name: "Reset" });
    userEvent.click(element);
    expect(onReset).toHaveBeenCalled();
  });

  it("should call onAdd function", () => {
    const onAdd = jest.fn();
    render(
      <MemoryRouter initialEntries={["/cards"]}>
        <Header onAdd={onAdd} />
      </MemoryRouter>
    );
    const element = screen.getByRole("button", { name: "Add" });
    userEvent.click(element);
    expect(onAdd).toHaveBeenCalled();
  });

  it("should not have buttons", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    const element = screen.queryByTestId("header-buttons");
    expect(element).not.toBeInTheDocument();
  });
});
