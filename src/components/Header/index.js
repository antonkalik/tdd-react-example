import { StyledHeader, StyledButtons } from "./style";
import { Link, useLocation } from "react-router-dom";

export const Header = ({ onReset, onAdd }) => {
  const location = useLocation();
  const isCardsView = location.pathname === "/cards";

  return (
    <StyledHeader data-testid="header">
      <Link to="/">
        <h1>Logo Title</h1>
      </Link>
      {isCardsView && (
        <StyledButtons data-testid="header-buttons">
          <button onClick={onAdd}>Add</button>
          <button onClick={onReset}>Reset</button>
        </StyledButtons>
      )}
    </StyledHeader>
  );
};
