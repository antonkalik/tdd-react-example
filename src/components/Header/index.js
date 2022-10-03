import { StyledHeader } from "./style";
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
        <div className="buttons">
          <button onClick={onAdd}>Add</button>
          <button onClick={onReset}>Reset</button>
        </div>
      )}
      <ul>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledHeader>
  );
};
