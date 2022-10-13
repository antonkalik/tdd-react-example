import { initCards } from "./index";

describe("initCards", () => {
  it("should return an array of 5 cards", () => {
    expect(initCards.length).toBe(5);
  });

  it("should return an array of cards with correct shape", () => {
    const [cardOne, cardTwo] = initCards;
    expect(cardOne).toEqual({
      title: "Test Card 1",
      id: 1,
    });
    expect(cardTwo).toEqual({
      title: "Test Card 2",
      id: 2,
    });
  });
});
