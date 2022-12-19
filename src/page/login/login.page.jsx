import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";

import { UserContext } from "../../contexts/user.context";
import { auth } from "../../config/firebase.config";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";
import CustomButton from "../../component/custom-button/custom-button.component";

import { CustomInput, LoginContainer, LoginContent } from "./login.styles";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  const handleSubmitPress = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        return setError("email", { type: "emailNoRegister" });
      }
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "passwordInvalid" });
      }
    }
  };

  return (
    <>
      <Header />
      <LoginContainer imageUrl="http://s2.glbimg.com/04fnCkkSVc12JLItOwOvVzWQILA=/620x430/e.glbimg.com/og/ed/f/original/2017/12/01/darth-vader-star-wars.jpg">
        <LoginContent onClick={(event) => event.preventDefault()}>
          <BiUser size={40} color="white" />
          <CustomInput
            hasError={!!errors?.email}
            {...register("email", { required: true })}
            type="email"
            placeholder="E-mail"
          />
          {errors?.email?.type === "required" && (
            <InputErrorMessage>O e-mail é obrigatório</InputErrorMessage>
          )}
          {errors?.email?.type === "emailNoRegister" && (
            <InputErrorMessage>E-mail invalido</InputErrorMessage>
          )}
          <CustomInput
            hasError={!!errors?.password}
            type="password"
            placeholder="Senha"
            autoComplete="true"
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
          )}
          {errors?.password?.type === "passwordInvalid" && (
            <InputErrorMessage>Senha Invalida</InputErrorMessage>
          )}
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
      <Footer />
    </>
  );
};
export default LoginPage;
