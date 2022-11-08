import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";

// import { AiOutlineMinus } from "react-icons/ai";
import { CategoryContext } from "../../contexts/categories/categories.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";

import {
  ButtonIcreaseProdut,
  InputPedidos,
  LabelInputPedidos,
  PedidoContainer,
  PedidoContent,
  ProductsPrice,
  ProdutosContainer,
  ProdutosContent,
  ProdutosPedidos,
  TitleCategoryProducts,
  TTeste,
} from "./pedidos.style";

const PedidosPage = () => {
  const { categories } = useContext(CategoryContext);

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
      <PedidoContainer>
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
        <ProdutosContainer>
          {categories.map((item) => (
            <ProdutosContent key={item.id}>
              <TitleCategoryProducts key={item.id}>
                {item.name}
              </TitleCategoryProducts>
              {item.name === "Rosh"
                ? item.marks.map((item) =>
                    item.products.map((item) => (
                      <TTeste>
                        <ProdutosPedidos key={item.id}>
                          {item.name}
                        </ProdutosPedidos>
                        <ProductsPrice>R${item.price},00</ProductsPrice>
                        <ButtonIcreaseProdut>
                          <BsPlus size={15} />
                        </ButtonIcreaseProdut>
                      </TTeste>
                    ))
                  )
                : item.tipes.map((item) =>
                    item.name === "Drinks"
                      ? item.products.map((item) => (
                          <TTeste key={item.id}>
                            <ProdutosPedidos key={item.id}>
                              {item.name}
                            </ProdutosPedidos>
                            <ProductsPrice>R${item.price},00</ProductsPrice>
                            <ButtonIcreaseProdut>
                              <BsPlus size={15} />
                            </ButtonIcreaseProdut>
                          </TTeste>
                        ))
                      : null
                  )}
            </ProdutosContent>
          ))}
        </ProdutosContainer>
      </PedidoContainer>
      <Footer />
    </>
  );
};
export default PedidosPage;
