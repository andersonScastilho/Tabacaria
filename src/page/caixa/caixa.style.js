import styled from "styled-components";

export const CashierContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  gap: 25px;
  padding: 7px;

  @media (max-width: 600px) {
    justify-content: start;
    flex-direction: column;
  }
`;
export const CashierContent = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const LabelInputRequired = styled.label`
  color: #fff;
  font-weight: 450;
  line-height: 30px;
`;
export const InputRequired = styled.input`
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #3e5954;
  border-radius: 5px;
`;
export const PreviewItensContent = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 3px;
`;
export const ProductName = styled.p`
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  text-align: center;
`;
export const ProductQuantityContainer = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;
export const ProductQuantity = styled.p`
  color: #fff;
`;
export const ProductTotalPrice = styled.p`
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
  text-align: center;
  background-color: #222;
  border-radius: 3px;
  margin-bottom: 3px;
`;
export const SelectOfPayment = styled.select`
  width: 150px;
`;
export const OptionOfPayment = styled.option``;
