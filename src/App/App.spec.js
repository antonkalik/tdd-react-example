import { render, screen } from "@testing-library/react";
import { App } from "./index";

jest.mock("src/components/Header", () => ({
  Header: () => <div data-testid="header" />,
}));

jest.mock("src/components/Body", () => ({
  Body: ({ cards }) => <div data-testid="body">{cards.length}</div>,
}));

jest.mock("src/components/Footer", () => {
  return {
    Footer: () => <div data-testid="footer" />,
  };
});

jest.mock("src/hooks/useCards", () => {
  return {
    useCards: () => ({
      cards: [],
    }),
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
});
