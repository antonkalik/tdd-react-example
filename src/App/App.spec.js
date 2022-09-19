import { render, screen } from "@testing-library/react";
import { App } from "./index";

jest.mock("../components/Header", () => ({
  Header: () => <div data-testid="header" />,
}));

jest.mock("../components/Body", () => ({
  Body: ({ cards }) => <div data-testid="body">{cards.length}</div>,
}));

jest.mock("../components/Footer", () => {
  return {
    Footer: () => <div data-testid="footer" />,
  };
});

describe("App", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render app", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toMatchSnapshot();
  });

  it("should have one card", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toMatchSnapshot();
  });
});
