import { render, screen } from "@testing-library/react";
import { App } from "./index";

jest.mock("../components/Header", () => ({
  Header: () => <div data-testid="header" />,
}));

jest.mock("../components/Body", () => ({
  Body: () => <div data-testid="body" />,
}));

jest.mock("../components/Footer", () => ({
  Footer: () => <div data-testid="footer" />,
}));

describe("Footer", () => {
  it("should render app", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toMatchSnapshot();
  });
});
