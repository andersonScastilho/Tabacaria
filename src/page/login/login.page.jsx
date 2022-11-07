import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";

// Styles
import {
  Button,
  CustomInput,
  LoginContainer,
  LoginContent,
} from "./login.styles";

// Components
import InputErrorMessage from "../../component/input-error-messag/input-error.component";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useEffect, useContext } from "react";
import { UserContext } from "../../contexts/user/user.context";
import { useNavigate } from "react-router-dom";

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
  }, [isAuthenticated]);
  const handleSubmitPress = async (data) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
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
        <LoginContent>
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
            {...register("password", { required: true })}
          />

          {errors?.password?.type === "required" && (
            <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
          )}
          {errors?.password?.type === "passwordInvalid" && (
            <InputErrorMessage>Senha Invalida</InputErrorMessage>
          )}

          <Button onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </Button>
        </LoginContent>
      </LoginContainer>
      <Footer />
    </>
  );
};
export default LoginPage;
