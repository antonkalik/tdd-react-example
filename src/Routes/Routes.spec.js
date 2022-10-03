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
  test("should show home view", () => {
    renderRoutes();
    expect(screen.getByTestId("home-view")).toBeInTheDocument();
  });

  test("should show cards page", () => {
    renderRoutes("/cards");

    expect(screen.getByTestId("cards-view")).toBeInTheDocument();
  });

  test("should show card view", () => {
    renderRoutes("/cards/9");
    expect(screen.getByTestId("card-view")).toBeInTheDocument();
  });

  test("should show about view", () => {
    renderRoutes("/about");
    expect(screen.getByTestId("about-view")).toBeInTheDocument();
  });

  test("should show not found view", () => {
    const { container } = renderRoutes("/someroute");
    const title = container.querySelector("h1");
    expect(title).toHaveTextContent("404 - Not Found");
  });
});
