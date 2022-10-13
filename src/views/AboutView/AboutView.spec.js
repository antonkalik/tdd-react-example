import { render, screen } from "@testing-library/react";
import { AboutView } from "./index";

describe("<AboutView />", () => {
  it("should render view", () => {
    render(<AboutView />);
    expect(screen.getByTestId("about-view")).toMatchSnapshot();
    expect(screen.getByTestId("about-view")).toHaveTextContent("About View");
  });
});
