import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  justify-content: center;
`;

export const MenuContent = styled.div`
  display: grid;
  grid-auto-rows: 125px;
  grid-template-columns: 2fr 2fr;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

`;