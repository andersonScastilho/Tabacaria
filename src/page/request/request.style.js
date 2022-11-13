import styled from "styled-components";

export const RequestContainer = styled.div`
  background-image: url("https://wallpaperaccess.com/full/1975322.jpg");
  display: flex;
  background-size: 100% 100%;
  flex-direction: column;
  height: 100%;
  gap: 7px;
  padding: 10px;
`;
export const FilterSelect = styled.select`
  width: 100px;
  background: none;
  border-radius: 5px;
`;
export const OptionSelect = styled.option``;

export const RequestContent = styled.div`
  border: 2px solid black;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
export const RequestText = styled.p``;

export const RequestStatus = styled.p`
  color: ${(props) => (props.status === "pendente" ? "red" : "green")};
`;
