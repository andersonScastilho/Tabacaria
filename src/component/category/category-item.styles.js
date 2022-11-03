import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  background-color: #fff;
  border-radius: 5px;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;
export const CategoryDisplayName = styled.p`
  color: #222;
  font-weight: 600;
  border: 2px solid transparent;
  background: rgba(233, 236, 239, 0.45);
  border-radius: 5px;
  padding: 5px;
  transition: 400ms;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    border: 2px solid black;
  }
`;
