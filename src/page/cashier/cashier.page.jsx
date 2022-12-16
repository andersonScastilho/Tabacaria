import { useContext } from "react";

import { useForm } from "react-hook-form";
import { AiOutlineMinus } from "react-icons/ai";
import { useAlert } from "react-alert";
import { addDoc, collection } from "firebase/firestore";
import { CashierContext } from "../../contexts/cashier.context";
import { db } from "../../config/firebase.config";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";

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
  InputTextArea,
} from "./cashier.style";

const CashierPage = () => {
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
  } = useContext(CashierContext);

  const alert = useAlert();

  const currentDate = new Date().getTime();

  let paymentStats;

  const handleSubmitPress = async (data) => {
    if (data.formOfPayment === "false") {
      paymentStats = "Pendente";
    } else {
      paymentStats = "Realizado";
    }

    if (products.length > 0) {
      let dataRequest = {
        ...data,
        status: "Pendente",
        formOfPayment: data.formOfPayment,
        paymentStats,
        products,
        priceTotal: productsTotalPrice,
        currentDate,
      };

      clearProducts();
      setValue("nameClient", "");
      setValue("tableClient", "");

      await addDoc(collection(db, "Pedidos"), dataRequest);

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
      <Header searchProducts={true} />
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
            hasError={!!errors?.tableClient}
            {...register("tableClient", { required: true, min: 0 })}
          />
          {errors?.tableClient?.type === "required" && (
            <InputErrorMessage>Informe a mesa do cliente</InputErrorMessage>
          )}
          {errors?.tableClient?.type === "min" && (
            <InputErrorMessage>Mesa invalida</InputErrorMessage>
          )}
          <LabelInputRequired>Forma de pagamento: </LabelInputRequired>
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
          <LabelInputRequired>Observação: </LabelInputRequired>
          <InputTextArea {...register("observation")} />
          <ProductTotalPrice>Total: R${productsTotalPrice}</ProductTotalPrice>
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Adicionar pedido
          </CustomButton>
        </CashierContent>
        <PreviewItensContainer>
          <PreviewItensContent>
            <TitlePreview>Produtos</TitlePreview>
            {products.map((item) => (
              <ProductQuantityContainer key={item.id}>
                {item.mark ? (
                  <ProductName>
                    {item.mark} - {item.name}
                  </ProductName>
                ) : (
                  <ProductName>{item.name}</ProductName>
                )}
              </ProductQuantityContainer>
            ))}
          </PreviewItensContent>
          <PreviewItensContent>
            <TitlePreview>Quantidade</TitlePreview>
            {products.map((item) => (
              <ProductQuantityContainer key={item.id}>
                <ProductQuantity>{item.solicitedQuantity} un</ProductQuantity>
                <CustomButton
                  onClick={() => handleDecreaseProductsToPedido(item.id)}
                >
                  <AiOutlineMinus />
                </CustomButton>
              </ProductQuantityContainer>
            ))}
          </PreviewItensContent>
        </PreviewItensContainer>
      </CashierContainer>
      <Footer />
    </>
  );
};
export default CashierPage;
