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
            <div
              style={{
                backgroundColor: " #5e9188",
                padding: "5px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ color: "#fff" }}>Item</p>
              <p style={{ color: "#fff" }}>Quantidade</p>
            </div>
            {products.map((item) => (
              <PreviewItensContent key={item.id}>
                <ProductName>{item.name}</ProductName>
                <ProductQuantityContainer>
                  <p style={{ color: "#fff" }}>{item.quantity} un</p>
                  <CustomButton
                    onClick={() => handleDecreaseProductsToPedido(item.id)}
                  >
                    <AiOutlineMinus />
                  </CustomButton>
                </ProductQuantityContainer>
              </PreviewItensContent>
            ))}
            <p
              style={{
                backgroundColor: "#008000",
                borderRadius: "3px",
                color: "#fff",
              }}
            >
              Total: R${productsTotalPrice},00
            </p>
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
