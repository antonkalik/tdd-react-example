import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 900px;
  margin: 0 auto;
  background-color: #333;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  > * {
    width: 100%;
  }
`;
