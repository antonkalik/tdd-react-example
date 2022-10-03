import { render, screen } from "@testing-library/react";
import { AppContext } from "src/context";
import { CardView } from "./index";
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: 9,
  }),
  useNavigate: () => mockedNavigate,
}));

const renderView = (state) => {
  return render(
    <AppContext.Provider value={{ state }}>
      <CardView />
    </AppContext.Provider>
  );
};

const cards = [
  {
    id: 9,
    title: "Card 9",
  },
];

describe("<CardView />", () => {
  it("should render the card view", () => {
    const { getByTestId } = renderView({
      cards,
    });
    expect(getByTestId("card-view")).toMatchSnapshot();
    expect(getByTestId("card-view")).toHaveTextContent("Card 9");
  });

  it("should get back", () => {
    renderView({
      cards,
    });
    const element = screen.getByRole("button", { name: "Back" });
    userEvent.click(element);

    expect(mockedNavigate).toHaveBeenCalledWith("/cards");
  });

  it("should show not found", () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{ state: { cards: [] } }}>
        <CardView />
      </AppContext.Provider>
    );
    expect(getByTestId("card-view")).toMatchSnapshot();
    expect(getByTestId("card-view")).toHaveTextContent("Card not found");
  });
});
