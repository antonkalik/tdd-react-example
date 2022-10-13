import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("<Footer />", () => {
  it("should render footer", () => {
    render(<Footer totalCards={9} />);
    expect(screen.getByTestId("footer")).toMatchSnapshot();
  });

  it("should have description and amount of cards", () => {
    render(<Footer totalCards={9} />);
    const footerData = screen.getByTestId("footer");
    expect(footerData).toHaveTextContent("footer description");
    expect(footerData).toHaveTextContent("Total Cards: 9");
  });

  it("should render 0 amount of cards", () => {
    render(<Footer />);
    const footerData = screen.getByTestId("footer");
    expect(footerData).toHaveTextContent("Total Cards: 0");
  });
});
