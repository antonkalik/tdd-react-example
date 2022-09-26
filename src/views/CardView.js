import { useParams } from "react-router-dom";

export const CardView = () => {
  const { id } = useParams();

  return (
    <div data-testid="card-view">
      <h1>CardView</h1>
      <p data-testid="card-view-id">{id}</p>
    </div>
  );
};
