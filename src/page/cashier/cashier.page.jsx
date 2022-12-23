import { useEffect, useState, useMemo, useContext } from "react";
import { useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { CategoryContext } from "../../contexts/categories.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import InputErrorMessage from "../../component/input-error-messag/input-error.component";
import { BsSearch } from "react-icons/bs";
import ProductItemCompoent from "../../component/product-item/product-item.component";

import {
  InputSearch,
  SearchContainer,
  SearchContent,
  SearchProductContainer,
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
  PreviewProductsContainer,
} from "./cashier.style";

const CashierPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const allProductSearch = [];
  const productsOfSearch = [];
  const toast = useToast();
  const currentDate = new Date().getTime();
  let paymentStats;

  // ------------ Functions Of Cashier-----------//

  //-------------Increase Product---------------//
  const addProductsToRequest = (product) => {
    const productAlreadInCart = products.some((item) => item.id === product.id);
    if (productAlreadInCart) {
      return setProducts((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, solicitedQuantity: item.solicitedQuantity + 1 }
            : item
        )
      );
    }
    if (product.mark) {
      setProducts((prveState) => [
        ...prveState,
        {
          ...product,
          mark: product.mark,
          servedQuantity: 0,
          solicitedQuantity: 1,
        },
      ]);
    } else {
      setProducts((prveState) => [
        ...prveState,
        { ...product, servedQuantity: 0, solicitedQuantity: 1 },
      ]);
    }
  };

  //------------Decrease products--------------//
  const decreaseProductQuantity = (productId) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, solicitedQuantity: product.solicitedQuantity - 1 }
            : product
        )
        .filter((product) => product.solicitedQuantity > 0)
    );
  };

  //------------- Take Value Of Request-------//
  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.solicitedQuantity;
    }, 0);
  }, [products]);

  //-------------Clear Search---------------//
  const clearProducts = () => {
    setProducts([]);
  };

  //---------------Search-------------------------//

  categories.map((category) =>
    category.subCategories.map((type) =>
      type.products.map((product) => allProductSearch.push(product))
    )
  );

  allProductSearch.filter((product) => productsOfSearch.push(product));

  const productsFiltred = useMemo(() => {
    const LowerBuscar = search.toLowerCase();
    return productsOfSearch.filter((product) =>
      product.mark
        ? product.mark.toLowerCase().includes(LowerBuscar) ||
          product.name.toLowerCase().includes(LowerBuscar)
        : product.name.toLowerCase().includes(LowerBuscar)
    );
  }, [search]);

  //-----------Submit to firebase -------------//

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
      toast({
        title: "Pedido foi adicionado.",
        description: "Adicionamos o pedido na fila",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });

      await addDoc(collection(db, "Pedidos"), dataRequest);
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

  return (
    <>
      <Header />
      <CashierContainer>
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
          <SearchContainer>
            <SearchContent>
              <InputSearch
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <p
                style={{
                  position: " relative",
                  left: "-30px",
                  top: "4px",
                }}
              >
                {<BsSearch size={22} />}
              </p>
            </SearchContent>
            {search !== "" && (
              <>
                <SearchProductContainer>
                  {productsFiltred.map((product) => (
                    <ProductItemCompoent
                      key={product.id}
                      mark={true}
                      button={true}
                      product={product}
                      onClick={() => addProductsToRequest(product)}
                    />
                  ))}
                </SearchProductContainer>
              </>
            )}
          </SearchContainer>
          <PreviewItensContent>
            <PreviewProductsContainer>
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
            </PreviewProductsContainer>
            <PreviewProductsContainer>
              <TitlePreview>Quantidade</TitlePreview>
              {products.map((item) => (
                <ProductQuantityContainer key={item.id}>
                  <ProductQuantity>{item.solicitedQuantity} un</ProductQuantity>
                  <CustomButton
                    onClick={() => decreaseProductQuantity(item.id)}
                  >
                    <AiOutlineMinus />
                  </CustomButton>
                  <CustomButton onClick={() => addProductsToRequest(item)}>
                    <AiOutlinePlus />
                  </CustomButton>
                </ProductQuantityContainer>
              ))}
            </PreviewProductsContainer>
          </PreviewItensContent>
        </PreviewItensContainer>
      </CashierContainer>
      <Footer />
    </>
  );
};
export default CashierPage;
