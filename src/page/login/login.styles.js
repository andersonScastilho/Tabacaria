import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  flex-direction: column;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  height: 100%;
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

export const Button = styled.button`
  border: 2px solid black;
  height: 35px;
  width: 150px;
  border-radius: 5px;
  font-size: 15px;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  &:active {
    background-color: red;
  }
`;
