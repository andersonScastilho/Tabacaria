import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  border-radius: 5px;
  font-weight: 600;
  padding: 3px;
  color: white;
  background-color: #777;
  box-shadow: -2px 2px 0 #222, -2px 2px 0 #000;
  cursor: pointer;
  &:active {
    box-shadow: inset -4px 3px 0 #222;
  }
`;
