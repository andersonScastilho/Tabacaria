import { useContext } from "react";
import { CategoryContext } from "../../contexts/categories/categories.context";
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
} from "./cardapio.styles";

const Cardapio = () => {
  const { categories, isLoading } = useContext(CategoryContext);
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
                    </ProductsContent>
                  ))}
                </ProductsContainer>
              ))}
        </CardapioContent>
      ))}
    </CardapioContainer>
  );
};
export default Cardapio;
