import styled from "styled-components";

export const FechamentoContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1 0 auto;
  background-image: url("https://i0.wp.com/heroisx.com/wp-content/uploads/2019/10/Jiraiya-de-naruto-escritor.jpeg?fit=760%2C398&ssl=1");
  padding: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  gap: 15px;
`;
export const FechamentoFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
  background-color: #222;
  gap: 7px;
  color: white;
`;
export const LabelFilterFechamento = styled.label``;
export const InputFilterFechamento = styled.input``;
export const InfoText = styled.p`
  font-size: 18px;
  color: #fff;
`;
export const InfoNameText = styled.h4`
  color: #ffff;
`;
export const FechamentoContent = styled.div`
  background: #fff;
  height: 450px;
  background-color: #222;
  margin: auto;
  border: 2px solid black;
  border-radius: 7px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const FechamentoItemContent = styled.div`
  display: flex;
  gap: 7px;
  padding: 5px;
  justify-content: space-between;
  &:nth-child(7) {
    justify-content: center;
    color: #fff;
    background-color: green;
    border-radius: 7px;
  }
`;
export const TitleFechamento = styled.h2`
  text-align: center;
  color: #fff;
`;
