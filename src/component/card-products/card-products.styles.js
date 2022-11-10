import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  gap: 7px;
`;
export const MenuContent = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  min-width: 27%;
  border-radius: 5px;
`;
export const TitleCategory = styled.h3`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #222;
`;
export const ProductsContainer = styled.div`
  background-color: darkgray;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 3px;
  gap: 10px;
`;
export const ProductsContent = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 1px 1px 1px #222;
  border-radius: 5px;
  padding: 3px;
  background-color: #ececec;
`;
export const ImageProduct = styled.img`
  height: 50px;
  border-radius: 5px;
  transition: 600ms 200ms;
  &:hover {
    transform: scale(3.1);
  }
`;
export const NameProduct = styled.p`
  color: black;
  font-weight: 600;
`;
export const PriceProduct = styled.p`
  color: #003e4f;
  font-weight: 600;
  border-bottom: 1px solid black;
`;
export const TipeDrinks = styled.h4`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #222;
`;
export const MarkRosh = styled.h4`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #222;
`;
