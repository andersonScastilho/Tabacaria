import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  background-color: #222;
`;
export const IconeHeader = styled.div``;
export const TitleHeader = styled.h1`
  font-size: 25px;
  flex-wrap: wrap;
  color: #fff;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 750px) {
    display: none;
  }
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
export const SpinHeader = styled.div`
  display: none;
  color: red;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 750px) {
    display: ${(props) => (props.oculto ? "none" : "flex")};
  }
`;
export const MenuContainer = styled.div`
  position: fixed;
  min-height: 100%;
  height: 100%;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
  p {
    color: #222;
  }
  @media (min-width: 750px) {
    display: none;
  }
`;
export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
export const MenuContent = styled.div`
  height: 100%;
  background-color: #222;
  padding: 7px;
  min-width: 350px;
  justify-content: space-around;
  background-color: #fff;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  border-radius: 7px;
  @media (max-width: 768px) {
    min-width: 70%;
  }
`;
export const MenuTitle = styled.h1`
  font-size: 30px;
  color: #222;
  text-align: center;
`;
export const ButtonMenu = styled.div`
  width: 100%;
  border-radius: 15px;
  min-height: 10%;
  border-top: 1px solid #fff;
  border: 1px solid white;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
export const SpinMenu = styled.div`
  display: none;
  color: red;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 750px) {
    display: flex;
  }
`;
