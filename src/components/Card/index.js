import { StyledCard } from "./style";

export const Card = ({ title, id, onRemove, onOpenCard }) => {
  return (
    <StyledCard data-testid="card">
      {title && <h5>{title}</h5>}
      {onRemove && <button onClick={() => onRemove(id)}>Remove</button>}
      {onOpenCard && <button onClick={() => onOpenCard(id)}>Open</button>}
    </StyledCard>
  );
};
