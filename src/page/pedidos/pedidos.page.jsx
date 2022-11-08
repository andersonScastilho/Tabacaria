import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";

import {
  InputPedidos,
  LabelInputPedidos,
  PedidoContainer,
  PedidoContent,
} from "./pedidos.style";

import Cardapio from "../../component/cart-products/cart-products.component";

const PedidosPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleSubmitPress = (data) => {
    console.log(data);
    setValue("nomeCliente", "");
    setValue("mesaCliente", "");
  };
  return (
    <>
      <Header />
      <PedidoContainer imageUrl="https://cdn.discordapp.com/attachments/929130096177053766/1039629996249071687/702883.jpg">
        <PedidoContent>
          <LabelInputPedidos>Nome</LabelInputPedidos>
          <InputPedidos
            hasError={!!errors?.nomeCliente}
            {...register("nomeCliente", { required: true })}
          />
          {errors?.nomeCliente?.type === "required" && (
            <InputErrorMessage>
              O nome do cliente é obrigaório
            </InputErrorMessage>
          )}
          <LabelInputPedidos>Mesa</LabelInputPedidos>
          <InputPedidos
            type="number"
            min={1}
            hasError={!!errors?.mesaCliente}
            {...register("mesaCliente", { required: true, min: 0 })}
          />
          {errors?.mesaCliente?.type === "required" && (
            <InputErrorMessage>Informe a mesa do cliente</InputErrorMessage>
          )}
          {errors?.mesaCliente?.type === "min" && (
            <InputErrorMessage>Mesa invalida</InputErrorMessage>
          )}
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Adicionar pedido
          </CustomButton>
        </PedidoContent>
        <Cardapio customButton={<BsPlus />} />
      </PedidoContainer>
      <Footer />
    </>
  );
};
export default PedidosPage;
