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
export const PreviewItens = styled.p`
  color: blue;
`;
