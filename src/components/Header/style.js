import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #777;
  .buttons {
    display: flex;
    button {
      margin-left: 10px;
      width: 5rem;
    }
  }
`;
