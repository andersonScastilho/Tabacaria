import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 7px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  gap: 10px;
`;
export const TitleCategory = styled.h3`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #222;
`;
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;
export const ProductsContent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px #222;
  border-radius: 5px;
  background-color: #dee7e7;
  padding: 3px;
`;
export const ImageProduct = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  transition: 600ms 200ms;
  &:hover {
    transform: scale(3.1);
  }
`;
export const NameProduct = styled.p`
  color: #282832;
  font-weight: 600;
`;
export const PriceProduct = styled.p`
  color: #a92727;
  font-weight: 600;
  border-bottom: 1px solid black;
`;
export const TipeDrinks = styled.h4`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #a92727;
`;
export const MarkRosh = styled.h4`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #a92727;
`;
