import React, { useReducer } from "react";

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCard = (title) => {
    dispatch({ type: "ADD_CARD", payload: { title } });
  };

  const removeCard = (id) => {
    dispatch({ type: "REMOVE_CARD", payload: { id } });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const value = {
    state,
    actions: {
      addCard,
      removeCard,
      reset,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default StoreProvider;
