import { reducer, initialState } from "./index";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_CARD", () => {
    expect(
      reducer(initialState, {
        type: "ADD_CARD",
        payload: { title: "test" },
      })
    ).toEqual({
      cards: [{ id: 1, title: "test" }],
    });
  });

  it("should handle REMOVE_CARD", () => {
    expect(
      reducer(
        {
          cards: [{ id: 1, title: "test" }],
        },
        {
          type: "REMOVE_CARD",
          payload: { id: 1 },
        }
      )
    ).toEqual({
      cards: [],
    });
  });

  it("should handle RESET", () => {
    expect(
      reducer(
        {
          cards: [{ id: 1, title: "test" }],
        },
        {
          type: "RESET",
        }
      )
    ).toEqual({
      cards: [],
    });
  });
});
