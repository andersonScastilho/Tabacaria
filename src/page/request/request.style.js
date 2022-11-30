import styled from "styled-components";

export const RequestContainer = styled.div`
  background-image: url("https://wallpaperaccess.com/full/1975322.jpg");
  display: flex;
  background-size: 100% 100%;
  flex-direction: column;
  min-height: 100%;
  flex: 1 0 auto;
  gap: 7px;
  padding: 10px;
`;
export const FilterSelect = styled.select`
  width: 100px;
  color: white;
  font-weight: 500;
  background: none;
  border-radius: 5px;
`;
export const OptionSelect = styled.option`
  font-weight: 600;
  font-size: 13px;
  :nth-child(1) {
    color: red;
  }
  :nth-child(2) {
    color: green;
  }
  &:nth-child(3) {
    color: black;
  }
`;
export const RequestsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media (max-width: 579px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const RequestContent = styled.div`
  border: 2px solid black;
  gap: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
export const RequestText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const RequestStatus = styled.p`
  color: ${(props) =>
    props.status === "pendente" || props.status === "em andamento"
      ? "red"
      : "green"};
  font-size: 18px;
  font-weight: 450;
`;
export const SpanDescription = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-right: 5px;
`;
