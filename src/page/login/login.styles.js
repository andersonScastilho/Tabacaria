import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  flex-direction: column;
  background-size: 100% 100%;
  flex: 1 0 auto;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 350px;
  background: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const CustomInput = styled.input`
  background-color: #fff;
  width: 100%;
  padding: 10px;
  margin-top: 18px;
  border-radius: 5px;
  border: ${(props) => (props.hasError ? `2px solid red` : "2px solid black")};
`;
