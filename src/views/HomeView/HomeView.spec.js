import { render, screen } from "@testing-library/react";
import { HomeView } from "./index";

describe("<HomeView />", () => {
  it("should render view", () => {
    render(<HomeView />);
    expect(screen.getByTestId("home-view")).toMatchSnapshot();
    expect(screen.getByTestId("home-view")).toHaveTextContent("Home View");
  });
});
