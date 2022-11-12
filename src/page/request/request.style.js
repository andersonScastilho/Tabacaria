import styled from "styled-components";

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
`;
export const RequestContent = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;
export const RequestText = styled.p`
  color: #222;
`;

export const RequestStatus = styled.p`
  color: ${(props) => (props.status === "pendente" ? "red" : "blue")};
`;
