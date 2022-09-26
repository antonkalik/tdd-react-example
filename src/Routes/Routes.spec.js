import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import { Routes } from "./index";

jest.mock("src/views/HomeView", () => ({
  HomeView: () => <div data-testid="home-view">HomeView</div>,
}));

jest.mock("src/views/CardsView", () => ({
  CardsView: () => <div data-testid="cards-view">CardsView</div>,
}));

jest.mock("src/views/AboutView", () => ({
  AboutView: () => <div data-testid="about-view">AboutView</div>,
}));

describe("<Routes />", () => {
  test("should show home view", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByTestId("home-view")).toBeInTheDocument();
  });

  test("should show cards page", () => {
    render(
      <MemoryRouter initialEntries={["/cards"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByTestId("cards-view")).toBeInTheDocument();
  });

  test("should show card view", () => {
    render(
      <MemoryRouter initialEntries={["/cards/9"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByTestId("card-view")).toBeInTheDocument();
    expect(screen.getByTestId("card-view-id")).toHaveTextContent('9');
  });

  test("should show about view", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByTestId("about-view")).toBeInTheDocument();
  });

  test("should show not found view", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/someroute"]}>
        <Routes />
      </MemoryRouter>
    );

    const title = container.querySelector("h1");
    expect(title).toHaveTextContent("404 - Not Found");
  });
});
