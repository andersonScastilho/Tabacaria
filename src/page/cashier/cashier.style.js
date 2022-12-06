import styled from "styled-components";

export const CashierContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1 0 auto;
  background-color: #282832;
  gap: 25px;
  padding: 7px;

  @media (max-width: 600px) {
    justify-content: start;
    flex-direction: column;
  }
`;
export const CashierContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 680px) {
    flex-wrap: wrap;
  }
`;
export const LabelInputRequired = styled.label`
  color: #fff;
  font-weight: 450;
  font-size: 18px;
  line-height: 30px;
`;
export const InputRequired = styled.input`
  width: 200px;
  background-color: #dee7e7;
  color: #282832;
  font-weight: 500;
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
  background-color: #dee7e7;
  border-radius: 5px;
  max-height: 440px;
  width: 350px;
  overflow: auto;
`;
export const PreviewItensContent = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 3px;
`;
export const ProductName = styled.p`
  font-size: 15px;
  color: #282832;
  font-weight: 500;
  text-align: center;
`;
export const ProductQuantityContainer = styled.div`
  display: flex;
  gap: 7px;
  border-bottom: 1px solid black;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 5px;
`;
export const ProductQuantity = styled.p`
  line-height: 25px;
  font-size: 15px;
  color: #282832;
  font-weight: 500;
  text-align: center;
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
  color: #c6d6d6;
  text-align: center;
  background-color: #77181e;
  border-radius: 3px;
  margin-bottom: 3px;
`;
export const SelectOfPayment = styled.select`
  width: 150px;
  border-radius: 5px;
  border: 2px solid black;
  font-size: 15px;
  font-weight: 500;
  background-color: #dee7e7;
  color: #282832;
`;
export const OptionOfPayment = styled.option`
  font-weight: 500;
  color: darkred;
`;
export const InputTextArea = styled.textarea`
  min-width: 250px;
  min-height: 80px;
  max-width: 250px;
  max-height: 80px;
  background-color: #dee7e7;
  color: #282832;
  font-size: 15px;
  border-radius: 4px;
  padding: 3px;
  font-weight: 500;
`;
