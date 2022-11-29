import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 7px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  gap: 10px;
`;
export const TitleCategory = styled.h2`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #222;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;
export const TipeOrMarkName = styled.h3`
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: #a92727;
`;
