import { render, screen } from "@testing-library/react";
import { AppContext } from "src/context";
import { CardView } from "./index";
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn();

const cardId = 9;

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: cardId,
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
    id: cardId,
    title: "Card 9",
  },
];

describe("<CardView />", () => {
  it("should render the card view", () => {
    const { getByTestId } = renderView({
      cards,
    });
    expect(getByTestId("card-view")).toMatchSnapshot();
    expect(getByTestId("card-view")).toHaveTextContent(`Card ${cardId}`);
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
    const { getByTestId } = renderView({ cards: [] });
    expect(getByTestId("card-view")).toMatchSnapshot();
    expect(getByTestId("card-view")).toHaveTextContent("Card not found");
  });
});
