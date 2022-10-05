import { render, screen } from "@testing-library/react";
import { MainLayout } from "./index";
import ContextProvider from "../../context";

jest.mock("react-router", () => ({
  Outlet: () => <div data-testid="outlet">Outlet</div>,
}));

jest.mock("src/components/Header", () => ({
  Header: () => <div data-testid="header">Header</div>,
}));

jest.mock("src/components/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock("src/hooks/useApi", () => ({
  useApi: () => ({
    loading: false,
    data: [],
    error: null,
  }),
}));

describe("<MainLayout />", () => {
  let container = null;

  beforeEach(() => {
    const { container: mainLayoutContainer } = render(<MainLayout />, {
      wrapper: ContextProvider,
    });
    container = mainLayoutContainer;
  });

  afterEach(() => {
    container = null;
  });

  it("should have header", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should have footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should have children", () => {
    expect(screen.getByTestId("body")).toBeInTheDocument();
  });

  it("should render", () => {
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
