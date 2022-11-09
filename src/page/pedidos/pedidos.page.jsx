import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";

import {
  InputPedidos,
  LabelInputPedidos,
  PedidoContainer,
  PedidoContent,
  PreviewItensContainer,
  ProductName,
  PreviewItensContent,
  ProductQuantity,
} from "./pedidos.style";

import Cardapio from "../../component/cart-products/cart-products.component";
import { useContext } from "react";
import { PedidoContext } from "../../contexts/pedidos/pedidos.context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

const PedidosPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    products,
    productsTotalPrice,
    clearProducts,
    decreaseProductQuantity,
  } = useContext(PedidoContext);

  const handleSubmitPress = async (data) => {
    let dados = { ...data, products, priceTotal: productsTotalPrice };
    clearProducts();
    setValue("nomeCliente", "");
    setValue("mesaCliente", "");
    await addDoc(collection(db, "Pedidos"), dados);
  };

  const handleDecreaseProductsToPedido = (productId) => {
    decreaseProductQuantity(productId);
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
          <PreviewItensContainer>
            <p
              style={{
                textAlign: "center",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              Preview
            </p>
            {products.map((item, indice) => (
              <PreviewItensContent key={item.id}>
                <p>{indice} </p>
                <ProductName>{item.name}</ProductName>
                <ProductQuantity>Quantidade: {item.quantity}</ProductQuantity>
                <CustomButton
                  onClick={() => handleDecreaseProductsToPedido(item.id)}
                >
                  <AiOutlineMinus />
                </CustomButton>
              </PreviewItensContent>
            ))}
            <p>Total: R${productsTotalPrice},00</p>
          </PreviewItensContainer>
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
