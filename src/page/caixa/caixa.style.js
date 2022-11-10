import styled from "styled-components";

export const CaixaContainer = styled.div`
  display: flex;
  height: 100%;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  gap: 25px;
  padding: 7px;
`;
export const CaixaContent = styled.div`
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
  font-size: 18px;
  border: 2px solid transparent;
  border-radius: 5px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const PreviewItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 3px;
  gap: 3px;
`;
export const PreviewItensContent = styled.div`
  display: flex;
  width: 200px;
  background-color: #3e5954;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 2px solid black;
  border-radius: 3px;
`;
export const ProductName = styled.p`
  font-size: 15px;
  color: #fff;
  font-weight: 500;
`;
export const ProductQuantityContainer = styled.div`
  display: flex;
  gap: 7px;
`;
export const ProductQuantity = styled.p`
  color: #fff;
`;
export const ProductTotal = styled.p`
  padding: 3px;
  background-color: #008000;
  border-radius: 3px;
  color: #fff;
`;
export const TitlePreviewContainer = styled.div`
  background-color: #5e9188;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;
export const TitlePreview = styled.p`
  color: #fff;
`;
