import React, { useCallback, useReducer } from "react";

export const initialState = { cards: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        cards: [
          ...state.cards,
          {
            ...action.payload,
            title: `Title Card ${state.cards.length + 1}`,
            id: state.cards.length + 1,
          },
        ],
      };
    case "SET_CARDS":
      return {
        cards: action.payload.cards.map((card) => ({
          id: card.id,
          title: card.title,
        })),
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

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCard = useCallback((title) => {
    dispatch({ type: "ADD_CARD", payload: { title } });
  }, []);

  const removeCard = useCallback((id) => {
    dispatch({ type: "REMOVE_CARD", payload: { id } });
  }, []);

  const setCards = useCallback((cards) => {
    dispatch({ type: "SET_CARDS", payload: { cards } });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  const value = {
    state,
    actions: {
      addCard,
      setCards,
      removeCard,
      reset,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
