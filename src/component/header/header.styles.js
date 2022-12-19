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
export const SpinMenu = styled.div`
  display: none;
  color: red;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 750px) {
    z-index: 2;
    display: flex;
  }
`;
export const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
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
export const MenuEscapeArea = styled.div`
  width: 100%;
`;
export const MenuContent = styled.div`
  height: 100%;
  min-width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    min-width: 70%;
  }
`;
export const MenuTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 20px;
`;
export const ButtonMenu = styled.div`
  width: 100%;
  flex: 1 0 auto;
  background-color: #222;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 35px;
  line-height: 25px;
  &:hover {
    cursor: pointer;
  }
`;
