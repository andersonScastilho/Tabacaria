import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px #222;
  border-radius: 5px;
  background-color: #dee7e7;
  padding: 5px;
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
