import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "src/context";

export const CardView = () => {
  const { id } = useParams();
  const { cards } = useContext(AppContext);

  const card = cards.find((card) => card.id === parseInt(id));

  if (!card) {
    return (
      <div data-testid="card-view">
        <h1>Card not found</h1>
      </div>
    );
  }

  return (
    <div data-testid="card-view">
      <p data-testid="card-view-id">{card.id}</p>
      <h1>{card.title}</h1>
    </div>
  );
};
