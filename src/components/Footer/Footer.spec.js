import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should render footer", () => {
    expect(screen.getByTestId("footer")).toMatchSnapshot();
  });

  it("should have description", () => {
    const description = screen.getByTestId("footer");
    expect(description).toHaveTextContent("footer description");
  });
});
