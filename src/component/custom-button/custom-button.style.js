import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  padding: 6px;
  border: 2px solid #000;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: #444;
  box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
  cursor: pointer;
  &:active {
    box-shadow: inset -4px 4px 0 #222;
  }
`;
