import { render, screen } from "@testing-library/react";
import { App } from "./index";

jest.mock("src/Routes", () => {
  return {
    Routes: () => <div data-testid="routes" />,
  };
});

describe("<App />", () => {
  it("should render app", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toMatchSnapshot();
  });
});
