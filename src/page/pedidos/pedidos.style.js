import styled from "styled-components";

export const PedidoContainer = styled.div`
  display: flex;
  height: 100%;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  gap: 25px;
  padding: 15px;
`;
export const PedidoContent = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const LabelInputPedidos = styled.label`
  color: #fff;
  font-weight: 450;
  line-height: 30px;
`;
export const InputPedidos = styled.input`
  width: 200px;
  background-color: #222;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 5px;
`;
export const ProdutosContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const TitleCategoryProducts = styled.p`
  text-align: center;
  color: #fff;
  font-size: 20px;
`;
export const ProdutosContent = styled.div`
  display: flex;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 200px;
  flex-direction: column;
  border-radius: 7px;
  border: 2px solid black;
  padding: 5px;
`;
export const ProdutosPedidos = styled.p`
  color: #fff;
  text-align: start;
`;
export const TTeste = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 3px;
  border: 2px solid black;
`;
export const ButtonIcreaseProdut = styled.button`
  cursor: pointer;
`;
export const ProductsPrice = styled.p`
  color: #fff;
`;
