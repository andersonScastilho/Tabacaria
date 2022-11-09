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
export const PreviewItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 7px;
  gap: 10px;
`;
export const PreviewItensContent = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  justify-content: space-between;
  border-radius: 5px;
  padding: 3px;
`;
export const ProductName = styled.p`
  font-size: 18px;
  color: red;
`;
export const ProductQuantity = styled.p`
  font-size: 15px;
  color: blue;
`;
