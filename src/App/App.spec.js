import { render, screen } from "@testing-library/react";
import { App } from "./index";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render header", () => {
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
  });

  it("should render body", () => {
    const element = screen.getByTestId("body");
    expect(element).toBeInTheDocument();
  });

  it("should render footer", () => {
    const element = screen.getByTestId("footer");
    expect(element).toBeInTheDocument();
  });

  it("should render app", () => {
    expect(screen.getByTestId("app")).toMatchSnapshot();
  });
});
