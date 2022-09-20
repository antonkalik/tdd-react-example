import { renderHook, act } from "@testing-library/react-hooks";
import { initCards, title } from "src/__mocks__/initCards";
import { useCards } from "./index";

describe("useCards", () => {
  it("should return an empty array if there are no cards", () => {
    const { result } = renderHook(() => useCards());

    expect(result.current.cards.length).toBe(0);
  });

  it("should add card", () => {
    const { result } = renderHook(() => useCards());

    act(() => {
      result.current.addCard({
        title,
      });
    });

    expect(result.current.cards.length).toBe(1);
  });

  it("should return an correct shape of card", () => {
    const { result } = renderHook(() => useCards(initCards));
    const [cardOne, cardTwo] = result.current.cards;

    result.current.cards.forEach((card, index) => {
      expect(card).toEqual({
        title: `${title} ${index + 1}`,
        id: index + 1,
      });
    });
  });

  // it("should return an empty array if there are no cards", () => {
  //   throw Error("Not implemented");
  // });

  it("should return the same length of cards", () => {
    const { result } = renderHook(() => useCards(initCards));

    expect(result.current.cards.length).toBe(initCards.length);
  });

  it("should return reduced array of cards after removing", () => {
    const { result } = renderHook(() => useCards(initCards));
    act(() => {
      result.current.removeCard(3);
    });

    expect(result.current.cards.length).toBe(initCards.length - 1);
  });

  it("should return empty array after reset", () => {
    const { result } = renderHook(() => useCards(initCards));
    act(() => {
      result.current.reset();
    });

    expect(result.current.cards.length).toBe(0);
  });

  it("should return the same amount of array if title has not been provided", () => {
    const { result } = renderHook(() => useCards());
    act(() => {
      result.current.addCard({});
    });

    expect(result.current.cards.length).toBe(0);
  });

  it("should return the same amount of array if id invalid", () => {
    const { result } = renderHook(() => useCards());
    act(() => {
      result.current.removeCard(29);
    });

    expect(result.current.cards.length).toBe(0);
  });
});
