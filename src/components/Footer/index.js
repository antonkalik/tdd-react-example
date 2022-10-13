import { StyledFooter } from "./style";

export const Footer = ({ totalCards }) => {
  return (
    <StyledFooter data-testid="footer">
      <p>footer description</p>
      <p>Total Cards: {totalCards || 0}</p>
    </StyledFooter>
  );
};
