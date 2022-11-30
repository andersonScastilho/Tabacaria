import styled from "styled-components";

export const CustomButtonStyle = styled.button`
  border-radius: 5px;
  padding: 3px;
  line-height: 20px;
  justify-content: center;
  color: white;
  display: flex;
  align-items: center;
  background-color: #777;
  box-shadow: -2px 2px 0 #222, -2px 2px 0 #000;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: inset -4px 3px 0 #222;
  }
`;
