export const Body = ({ cards = [] }) => {
  return (
    <div data-testid="body">
      <div data-testid="cards">
        {cards.length === 0 ? (
          <div data-testid="no-cards-message">No cards</div>
        ) : (
          cards.map((card, index) => (
            <div key={index} data-testid="card">
              <p>{card.id}</p>
              <h4>{card.title}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
