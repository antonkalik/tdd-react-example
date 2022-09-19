import { useCallback, useMemo, useState } from "react";

export const useCards = (initCards = []) => {
  const initState = initCards.map((card, index) => ({
    ...card,
    id: index + 1,
  }));
  const [cards, setCards] = useState(initState);

  const memorisedCards = useMemo(() => cards, [cards.length]);

  const addCard = useCallback(
    (card) => {
      setCards((cards) => {
        if (!card?.title) {
          return cards;
        }
        return [...cards, { ...card, id: cards.length + 1 }];
      });
    },
    [cards.length]
  );

  const removeCard = useCallback(
    (id) => {
      setCards((cards) => cards.filter((card) => card.id !== id));
    },
    [cards.length]
  );

  const reset = useCallback(() => {
    setCards([]);
  }, [cards.length]);

  return { cards: memorisedCards, addCard, removeCard, reset };
};
