import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #222;
`;
export const TitleHeader = styled.h1`
  color: #fff;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const SearchContainer = styled.div``;
export const InputSearch = styled.input`
  border-radius: 5px;
  padding: 4px;
`;
export const SearchProductContainer = styled.div`
  position: absolute;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-height: 400px;
  overflow: auto;
  background-color: darkgray;
  padding: 7px;
`;
export const SearchContent = styled.div`
  display: flex;
  padding: 3px;
`;
