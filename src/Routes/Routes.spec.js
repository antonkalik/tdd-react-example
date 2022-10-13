import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "./index";
import ContextProvider from "../context";

jest.mock("src/views/HomeView", () => ({
  HomeView: () => <div data-testid="home-view">HomeView</div>,
}));

jest.mock("src/views/CardsView", () => ({
  CardsView: () => <div data-testid="cards-view">CardsView</div>,
}));

jest.mock("src/views/CardView", () => ({
  CardView: () => <div data-testid="card-view">CardView</div>,
}));

jest.mock("src/views/AboutView", () => ({
  AboutView: () => <div data-testid="about-view">AboutView</div>,
}));

jest.mock("src/hooks/useApi", () => ({
  useApi: () => ({
    data: [],
  }),
}));

const renderRoutes = (route = "/") => {
  return render(
    <ContextProvider>
      <MemoryRouter initialEntries={[route]}>
        <Routes />
      </MemoryRouter>
    </ContextProvider>
  );
};

describe("<Routes />", () => {
  it("should show home view", () => {
    renderRoutes();
    expect(screen.getByTestId("home-view")).toBeInTheDocument();
  });

  it("should show cards page", () => {
    renderRoutes("/cards");

    expect(screen.getByTestId("cards-view")).toBeInTheDocument();
  });

  it("should show card view", () => {
    renderRoutes("/cards/9");
    expect(screen.getByTestId("card-view")).toBeInTheDocument();
  });

  it("should show about view", () => {
    renderRoutes("/about");
    expect(screen.getByTestId("about-view")).toBeInTheDocument();
  });

  it("should show not found view", () => {
    renderRoutes("/someroute");
    expect(screen.getByText("404 - Not Found")).toBeInTheDocument();
  });
});
