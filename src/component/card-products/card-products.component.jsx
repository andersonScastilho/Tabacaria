import { useContext } from "react";

import { CategoryContext } from "../../contexts/categories.context";
import { UserContext } from "../../contexts/user.context";
import { CaixaContext } from "../../contexts/caixa.context";

import CustomButton from "../custom-button/custom-button.component";
import LoadingComponent from "../loading/loading.component";

import {
  MenuContainer,
  MenuContent,
  ProductsContainer,
  TitleCategory,
  MarkRosh,
  TipeDrinks,
} from "./card-products.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductItemComponent from "../product-item/product-item.component";

const CardProducts = (props) => {
  const { categories, isLoading } = useContext(CategoryContext);
  const { addProductsToPedido } = useContext(CaixaContext);
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

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
                    <ProductItemComponent
                      name={product.name}
                      imageUrl={product.imageUrl}
                      price={product.price}
                    />
                  ))}
                </ProductsContainer>
              ))
            : category.marks.map((mark) => (
                <ProductsContainer key={mark.id}>
                  <MarkRosh>{mark.name}</MarkRosh>
                  {mark.products.map((product) => (
                    <ProductItemComponent
                      name={product.name}
                      imageUrl={product.imageUrl}
                      price={product.price}
                    />
                  ))}
                </ProductsContainer>
              ))}
        </MenuContent>
      ))}
    </MenuContainer>
  );
};
export default CardProducts;
