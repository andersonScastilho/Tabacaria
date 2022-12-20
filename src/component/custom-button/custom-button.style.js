import styled from "styled-components";

export const CustomButtonStyle = styled.button`
  padding: 3px;
  border: 1px solid #777;
  border-radius: 3px;
  line-height: 15px;
  justify-content: center;
  color: black;
  display: flex;
  align-items: center;
  background-color: #fff;
  max-width: 250px;
  box-shadow: -2px 2px 0 #222, -2px 2px 0 #000;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: inset -4px 3px 0 #222;
  }
`;
