import { Card } from "src/components/Card";
import { StyledBody, StyledCards } from "./style";

export const Body = ({ cards = [], removeCard }) => {
  return (
    <StyledBody data-testid="body">
      <h3>Cards</h3>
      <StyledCards data-testid="cards">
        {cards.length === 0 ? (
          <h4>No cards</h4>
        ) : (
          cards.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              onRemove={removeCard}
            />
          ))
        )}
      </StyledCards>
    </StyledBody>
  );
};
