import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "src/context";

export const CardView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(AppContext);

  const card = state.cards.find((card) => card.id === parseInt(id));

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
      <button onClick={() => navigate("/cards")}>Back</button>
    </div>
  );
};
