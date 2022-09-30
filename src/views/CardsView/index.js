import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Cards } from "src/components/Cards";
import { AppContext } from "src/context";

export const CardsView = () => {
  const navigate = useNavigate();

  const {
    state,
    actions: { removeCard },
  } = useContext(AppContext);

  const onClickCard = (id) => {
    navigate(`/cards/${id}`);
  };

  return (
    <div data-testid="cards-view">
      <Cards
        cards={state.cards}
        removeCard={removeCard}
        onClickCard={onClickCard}
      />
    </div>
  );
};
