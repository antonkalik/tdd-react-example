import { Card } from "src/components/Card";
import { StyledCardsList, StyledCards } from "./style";

export const Cards = ({ cards = [], removeCard, onOpenCard }) => {
  return (
    <StyledCards data-testid="cards">
      <h3>Cards</h3>
      <StyledCardsList data-testid="cards-list">
        {cards.length === 0 ? (
          <h4>No cards</h4>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              onRemove={removeCard}
              onOpenCard={onOpenCard}
            />
          ))
        )}
      </StyledCardsList>
    </StyledCards>
  );
};
