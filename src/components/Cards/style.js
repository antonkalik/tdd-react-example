import styled from "styled-components";

export const StyledCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  > h3 {
    width: 100%;
    text-align: left;
  }
`;

export const StyledCardsList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  > h4 {
    width: 100%;
    text-align: center;
  }
`;
