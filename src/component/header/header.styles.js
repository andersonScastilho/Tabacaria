import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #222;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 1px #222;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 823px) {
    justify-content: center;
  }
`;
export const LogoHeader = styled.img`
  height: 6rem;
  width: 10rem;
  border-radius: 5px;
`;
export const TitleHeader = styled.h1`
  color: #fff;
`;
export const MenuHeader = styled.menu`
  display: flex;
  gap: 10px;
  padding: 5px;
`;
export const ItemMenu = styled.div`
  background-color: #dce0e6;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 3px;
  box-shadow: 2px 2px 2px #222;
  color: #222;
  &:hover {
    cursor: pointer;
    border: 2px solid black;
  }
`;
