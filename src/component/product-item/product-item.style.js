import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  height: 120px;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px #222;
  border-radius: 5px;
  margin: 5px;
  background-color: #dee7e7;
  padding: 5px;
  @media (max-width: 680px) {
    width: 400px;
  }
`;
export const ImageProduct = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
`;
export const NameProduct = styled.p`
  text-align: center;
  width: 40%;
  color: #282832;
  font-weight: 600;
`;
export const PriceProduct = styled.p`
  color: #a92727;
  font-weight: 600;
  border-bottom: 1px solid black;
`;
