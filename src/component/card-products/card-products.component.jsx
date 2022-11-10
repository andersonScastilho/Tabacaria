import { useContext } from "react";

import { CategoryContext } from "../../contexts/categories.context";
import { PedidoContext } from "../../contexts/pedidos.context";

import CustomButton from "../custom-button/custom-button.component";
import LoadingComponent from "../loading/loading.component";

import {
  MenuContainer,
  MenuContent,
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
  ProductsContent,
  TitleCategory,
  MarkRosh,
  TipeDrinks,
} from "./card-products.styles";

const CardProducts = (props) => {
  const { categories, isLoading } = useContext(CategoryContext);
  const { addProductsToPedido } = useContext(PedidoContext);

  const handleAddProductsToPedido = (product) => {
    addProductsToPedido(product);
  };

  return (
    <MenuContainer imageUrl="https://www.dicasecuriosidades.net/wp-content/uploads/2019/05/gandalf-facts.jpg">
      {isLoading && <LoadingComponent />}
      {categories.map((category) => (
        <MenuContent key={category.id}>
          <TitleCategory>{category.name}</TitleCategory>
          {category.name === "Bebidas"
            ? category.tipes.map((tipe) => (
                <ProductsContainer key={tipe.id}>
                  <TipeDrinks>{tipe.name}</TipeDrinks>
                  {tipe.products.map((product) => (
                    <ProductsContent key={product.id}>
                      <ImageProduct src={product.imageUrl} />
                      <NameProduct>{product.name}</NameProduct>
                      <PriceProduct>R${product.price},00</PriceProduct>
                      {props.customButton ? (
                        <CustomButton
                          onClick={() => handleAddProductsToPedido(product)}
                        >
                          {props.customButton}
                        </CustomButton>
                      ) : null}
                    </ProductsContent>
                  ))}
                </ProductsContainer>
              ))
            : category.marks.map((mark) => (
                <ProductsContainer key={mark.id}>
                  <MarkRosh>{mark.name}</MarkRosh>
                  {mark.products.map((product) => (
                    <ProductsContent key={product.id}>
                      <ImageProduct src={product.imageUrl} />
                      <NameProduct>{product.name}</NameProduct>
                      <PriceProduct>R${product.price},00</PriceProduct>
                      {props.customButton ? (
                        <CustomButton
                          onClick={() => handleAddProductsToPedido(product)}
                        >
                          {props.customButton}
                        </CustomButton>
                      ) : null}
                    </ProductsContent>
                  ))}
                </ProductsContainer>
              ))}
        </MenuContent>
      ))}
    </MenuContainer>
  );
};
export default CardProducts;
