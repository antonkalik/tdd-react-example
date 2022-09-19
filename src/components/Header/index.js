import { StyledHeader } from "./style";

export const Header = ({ onReset, onAdd }) => {
  return (
    <StyledHeader data-testid="header">
      <h1>Logo Title</h1>
      <div className="buttons">
          <button onClick={onAdd}>Add</button>
          <button onClick={onReset}>Reset</button>
      </div>
    </StyledHeader>
  );
};
