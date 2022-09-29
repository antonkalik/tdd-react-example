import React from "react";

export const initialState = { cards: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        cards: action.payload.title
          ? [
              ...state.cards,
              {
                ...action.payload,
                id: state.cards.length + 1,
              },
            ]
          : state.cards,
      };
    case "REMOVE_CARD":
      return {
        cards: state.cards.filter((card) => card.id !== action.payload.id),
      };
    case "RESET":
      return initialState;
    default:
      return state || initialState;
  }
}

export const AppContext = React.createContext();

const StoreProvider = ({ children }) => {
  const value = React.useReducer(reducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default StoreProvider;
