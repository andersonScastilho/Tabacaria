import styled from "styled-components";

export const CategoriesContainer = styled.div`
  flex: 1 0 auto;
  background-color: coral;
  display: flex;
  justify-content: center;
  & div:nth-child(1) {
    grid-area: a;
  }
  & div:nth-child(2) {
    grid-area: b;
  }
  & div:nth-child(3) {
    grid-area: c;
  }
  & div:nth-child(4) {
    grid-area: d;
  }
  & div:nth-child(5) {
    grid-area: e;
  }
  & div:nth-child(6) {
    grid-area: f;
  }
  & div:nth-child(7) {
    grid-area: g;
  }
  & div:nth-child(8) {
    grid-area: h;
  }
  & div:nth-child(9) {
    grid-area: i;
  }
  & div:nth-child(10) {
    grid-area: j;
  }
  & div:nth-child(11) {
    grid-area: k;
  }
  & div:nth-child(12) {
    grid-area: l;
  }
`;
export const CategoriesContent = styled.div`
  height: 100%;
  width: 1920px;
  display: grid;
  grid-template-areas:
    "a b"
    "c c"
    "d e"
    "f f"
    "g h"
    "i i"
    "j k"
    "l l";
  grid-gap: 15px;
  padding: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    & div:nth-child(1) {
      flex: 1;
    }
    & div:nth-child(2) {
      flex: 1;
    }
    & div:nth-child(3) {
      flex: 1;
    }
    & div:nth-child(4) {
      flex: 1;
    }
    & div:nth-child(5) {
      flex: 1;
    }
  }
`;
