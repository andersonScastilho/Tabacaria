import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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
import { useEffect } from "react";
import { CategoryContext } from "../../contexts/categories.context";

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
    addProductsToRequest,
  } = useContext(CashierContext);
  const { fetchCategories } = useContext(CategoryContext);
  useEffect(() => {
    fetchCategories();
  }, []);
  const toast = useToast();

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
      toast({
        title: "Pedido foi adicionado.",
        description: "Adicionamos o pedido na fila",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    } else {
      toast({
        title: "Não foi possivel adicionar o pedido",
        description: "Verifique se adicionou itens ao pedido",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  const handleDecreaseProductsToPedido = (productId) => {
    decreaseProductQuantity(productId);
  };
  const handleIcreaseProductsToPedido = (product) => {
    addProductsToRequest(product);
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
                <CustomButton
                  onClick={() => handleIcreaseProductsToPedido(item)}
                >
                  <AiOutlinePlus />
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
