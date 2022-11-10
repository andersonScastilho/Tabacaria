import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useAlert } from "react-alert";

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
  ProductQuantityContainer,
  ProductQuantity,
  ProductTotal,
  TitlePreviewContainer,
  TitlePreview,
} from "./caixa.style";

import CardProducts from "../../component/card-products/card-products.component";
import { useContext } from "react";
import { PedidoContext } from "../../contexts/pedidos/pedidos.context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

const Caixa = () => {
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

  const alert = useAlert();
  const handleSubmitPress = async (data) => {
    if (products.length > 0) {
      let dados = { ...data, products, priceTotal: productsTotalPrice };
      clearProducts();
      setValue("nomeCliente", "");
      setValue("mesaCliente", "");
      await addDoc(collection(db, "Pedidos"), dados);
      alert.success("O Pedido foi adicionado");
    } else {
      alert.error("Adicione itens ao pedido");
    }
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
            style={{ width: "70px", textAlign: "center" }}
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
            {products.length > 0 ? (
              <TitlePreviewContainer>
                <TitlePreview>Item</TitlePreview>
                <TitlePreview>Quantidade</TitlePreview>
              </TitlePreviewContainer>
            ) : null}

            {products.map((item) => (
              <PreviewItensContent key={item.id}>
                <ProductName>{item.name}</ProductName>
                <ProductQuantityContainer>
                  <ProductQuantity>{item.quantity}</ProductQuantity>
                  <CustomButton
                    onClick={() => handleDecreaseProductsToPedido(item.id)}
                  >
                    <AiOutlineMinus />
                  </CustomButton>
                </ProductQuantityContainer>
              </PreviewItensContent>
            ))}
          </PreviewItensContainer>
          <ProductTotal>Total: R${productsTotalPrice},00</ProductTotal>
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Adicionar pedido
          </CustomButton>
        </PedidoContent>
        <CardProducts customButton={<BsPlus />} />
      </PedidoContainer>
      <Footer />
    </>
  );
};
export default Caixa;
