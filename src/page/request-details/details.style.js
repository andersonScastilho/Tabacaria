import styled from "styled-components";

export const DetailsRequestContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
  background-image: url("https://images3.alphacoders.com/223/223995.jpg");
`;
export const DetailsRequestContent = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 350px;
  height: 420px;
  background-color: #c6d4e1;
  display: flex;
  flex-direction: column;
  padding: 7px;
  gap: 7px;
`;
export const DataRequestContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const DataRequestText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const InputOfCheckbox = styled.input`
  &[type="checkbox"] {
    position: relative;
    cursor: pointer;
  }
  &[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: #222;
  }
  &[type="checkbox"]:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: #1e80ef;
  }
  &[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;
export const RequestProductsContainer = styled.div`
  background-color: #8ab3cf;
  border-radius: 7px;
  padding: 7px;
  gap: 7px;
  overflow: auto;
  max-height: 210px;
  display: flex;
  flex-direction: column;
`;
export const TitleProductText = styled.h3`
  text-align: center;
  background-color: darkcyan;
`;
export const RequestProductsContent = styled.div`
  background-color: #e4ebf0;
  border-radius: 7px;
  gap: 7px;
  padding: 5px;
`;
export const DataProducts = styled.p`
  font-weight: 450;
  font-size: 17px;
`;

export const StatusText = styled.p`
  font-weight: 450;
  font-size: 18px;
  color: ${(props) => (props.status === "pendente" ? "red" : "green")};
`;
