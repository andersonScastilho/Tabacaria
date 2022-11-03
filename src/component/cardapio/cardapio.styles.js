import styled from "styled-components";

export const CardapioContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 15px;
`;
export const CardapioContent = styled.div`
  border: 2px solid black;
  background-color: #0f4571;
  border-radius: 5px;
  display: flex;
  box-shadow: 2px 3px 2px #222;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleCardapio = styled.h2`
  color: darkgray;
`;
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2px;
  padding: 10px;
`;
export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  &:nth-child(1) {
    background-color: red;
    color: darkorange;
  }
  &:nth-child(2) {
    background-color: darkorange;
    color: red;
  }
`;
export const TitleCategory = styled.h3`
  align-self: center;
`;
export const ProdutosContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 15px;
`;
export const ProdutosContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  border-bottom: 1.5px solid black;
  box-shadow: 1px 1px 1px #222;
  border-radius: 5px;
  padding: 3px;
`;
export const ImageProduto = styled.img`
  height: 50px;
  border-radius: 5px;
`;
export const NameProduto = styled.p`
  color: black;
`;
export const PrecoProduto = styled.p`
  color: #fff;
`;
