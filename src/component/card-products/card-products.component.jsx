import { useContext } from "react";
import { CategoryContext } from "../../contexts/categories.context";
import { PedidoContext } from "../../contexts/pedidos.context";
import CustomButton from "../custom-button/custom-button.component";
import LoadingComponent from "../loading/loading.component";

import {
  CardapioContainer,
  CardapioContent,
  ImageProduto,
  NameProduto,
  PrecoProduto,
  ProductsContainer,
  ProductsContent,
  TitleCategory,
  TitleMark,
} from "./card-products.styles";

const CardProducts = (props) => {
  const { categories, isLoading } = useContext(CategoryContext);
  const { addProductsToPedido } = useContext(PedidoContext);

  const handleAddProductsToPedido = (product) => {
    addProductsToPedido(product);
  };

  return (
    <CardapioContainer imageUrl="https://www.dicasecuriosidades.net/wp-content/uploads/2019/05/gandalf-facts.jpg">
      {isLoading && <LoadingComponent />}
      {categories.map((category) => (
        <CardapioContent key={category.id}>
          <TitleCategory>{category.name}</TitleCategory>
          {category.name === "Bebidas"
            ? category.tipes.map((tipe) => (
                <ProductsContainer key={tipe.id}>
                  <TitleMark>{tipe.name}</TitleMark>
                  {tipe.products.map((product) => (
                    <ProductsContent key={product.id}>
                      <ImageProduto src={product.imageUrl} />
                      <NameProduto>{product.name}</NameProduto>
                      <PrecoProduto>R${product.price},00</PrecoProduto>
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
                  <TitleMark>{mark.name}</TitleMark>
                  {mark.products.map((product) => (
                    <ProductsContent key={product.id}>
                      <ImageProduto src={product.imageUrl} />
                      <NameProduto>{product.name}</NameProduto>
                      <PrecoProduto>R${product.price},00</PrecoProduto>
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
        </CardapioContent>
      ))}
    </CardapioContainer>
  );
};
export default CardProducts;
