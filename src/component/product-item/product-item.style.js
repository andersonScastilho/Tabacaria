import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px #222;
  width: 290px;
  border-radius: 5px;
  margin: 5px;
  background-color: #dee7e7;
  padding: 7px;

  @media (max-width: 1200px) {
    width: 249px;
  }
  @media (max-width: 1050px) {
    width: 340px;
  }
`;
export const ImageProduct = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
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
