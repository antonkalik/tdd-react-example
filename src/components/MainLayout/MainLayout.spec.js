import { render, screen } from "@testing-library/react";
import { MainLayout } from "./index";

jest.mock("src/components/Header", () => ({
  Header: () => <div data-testid="header">Header</div>,
}));

jest.mock("src/components/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

describe("<MainLayout />", () => {
  test("should have header", () => {
    render(<MainLayout />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("should have footer", () => {
    render(<MainLayout />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("should have children", () => {
    render(
      <MainLayout>
        <div data-testid="children">Children</div>
      </MainLayout>
    );
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  test("should render", () => {
    const { container } = render(<MainLayout />);
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
