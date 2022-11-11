import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useAlert } from "react-alert";
import { addDoc, collection } from "firebase/firestore";

import { RequestContext } from "../../contexts/request.context";
import { CaixaContext } from "../../contexts/caixa.context";
import { db } from "../../config/firebase.config";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";
import CardProducts from "../../component/card-products/card-products.component";

import {
  LabelInputRequired,
  InputRequired,
  CashierContainer,
  CashierContent,
  PreviewItensContainer,
  ProductName,
  PreviewItensContent,
  ProductQuantityContainer,
  ProductQuantity,
  ProductTotalPrice,
  TitlePreviewContainer,
  TitlePreview,
} from "./caixa.style";

const Cashier = () => {
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
  } = useContext(CaixaContext);
  const { countRequest } = useContext(RequestContext);

  const alert = useAlert();
  const date = new Date();

  const currentDate = date.toLocaleDateString();

  const handleSubmitPress = async (data) => {
    if (products.length > 0) {
      let dataRequest = {
        ...data,
        id: countRequest + 1,
        products,
        priceTotal: productsTotalPrice,
        currentDate,
      };

      clearProducts();
      setValue("nameClient", "");
      setValue("tableClient", "");

      await addDoc(collection(db, "Pedidos"), dataRequest);

      alert.success("O Pedido foi adicionado");
      setTimeout(() => {
        window.location.reload(true);
      }, 800);
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
      <CashierContainer imageUrl="https://cdn.discordapp.com/attachments/929130096177053766/1039629996249071687/702883.jpg">
        <CashierContent>
          <LabelInputRequired>Nome</LabelInputRequired>
          <InputRequired
            hasError={!!errors?.nameClient}
            {...register("nameClient", { required: true })}
          />
          {errors?.nameClient?.type === "required" && (
            <InputErrorMessage>
              O nome do cliente é obrigaório
            </InputErrorMessage>
          )}
          <LabelInputRequired>Mesa</LabelInputRequired>
          <InputRequired
            style={{ width: "70px", textAlign: "center" }}
            type="number"
            min={1}
            hasError={!!errors?.mesaCliente}
            {...register("tableClient", { required: true, min: 0 })}
          />
          {errors?.tableClient?.type === "required" && (
            <InputErrorMessage>Informe a mesa do cliente</InputErrorMessage>
          )}
          {errors?.tableClient?.type === "min" && (
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
          <ProductTotalPrice>
            Total: R${productsTotalPrice},00
          </ProductTotalPrice>
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Adicionar pedido
          </CustomButton>
        </CashierContent>
        <CardProducts customButton={<BsPlus />} />
      </CashierContainer>
      <Footer />
    </>
  );
};
export default Cashier;
