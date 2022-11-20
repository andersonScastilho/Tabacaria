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
  TitlePreview,
  SelectOfPayment,
  OptionOfPayment,
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
  const currentHors = date.toLocaleTimeString();

  let paymentStats;
  const handleSubmitPress = async (data) => {
    if (data.formOfPayment === "false") {
      paymentStats = "pendente";
    } else {
      paymentStats = "realizado";
    }
    if (products.length > 0) {
      let dataRequest = {
        ...data,
        nmrPedido: countRequest + 1,
        status: "em andamento",
        formOfPayment: data.formOfPayment,
        paymentStats,
        products,
        priceTotal: productsTotalPrice,
        currentHors,
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
          <SelectOfPayment {...register("formOfPayment")}>
            <OptionOfPayment value="false"></OptionOfPayment>
            <OptionOfPayment value="dinheiro">Dinheiro</OptionOfPayment>
            <OptionOfPayment value="cartaoDebito">
              Cartão - Debito
            </OptionOfPayment>
            <OptionOfPayment value="cartaoCredito">
              Cartao - Credito
            </OptionOfPayment>
            <OptionOfPayment value="pix">Pix</OptionOfPayment>
          </SelectOfPayment>
          <textarea
            {...register("observation")}
            style={{
              minWidth: "250px",
              minHeight: "80px",
              maxWidth: "250px",
              maxHeight: "80px",
            }}
          />
          <PreviewItensContainer>
            <PreviewItensContent>
              <TitlePreview>Produtos</TitlePreview>
              {products.map((item) => (
                <PreviewItensContent key={item.id}>
                  <ProductName>{item.name}</ProductName>
                </PreviewItensContent>
              ))}
            </PreviewItensContent>
            <PreviewItensContent>
              <TitlePreview>Quantidade</TitlePreview>
              {products.map((item) => (
                <ProductQuantityContainer key={item.id}>
                  <ProductQuantity>{item.quantity} un</ProductQuantity>
                  <CustomButton
                    onClick={() => handleDecreaseProductsToPedido(item.id)}
                  >
                    <AiOutlineMinus />
                  </CustomButton>
                </ProductQuantityContainer>
              ))}
            </PreviewItensContent>
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
