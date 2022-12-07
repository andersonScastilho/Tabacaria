import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const MenuContent = styled.div`
  padding: 5px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  gap: 10px;

  &:nth-child(2) {
    background-color: darkgrey;
  }
  &:nth-child(4) {
    background-color: darkgray;
  }
`;
export const TitleCategory = styled.h2`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #222;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  border: 2px solid black;
  width: 320px;
  border-radius: 7px;
`;
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  max-height: 400px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #202020; /* color of the tracking area */
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e3e3e3; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid; /* creates padding around scroll thumb */
  }
`;
export const TipeOrMarkName = styled.h3`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #a92727;
  position: relative;
`;
