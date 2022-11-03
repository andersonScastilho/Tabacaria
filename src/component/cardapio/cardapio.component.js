import { useContext, useEffect } from "react";
import { CategoryContext } from "../../contexts/categories/categories.context";
import {
  CardapioContainer,
  CardapioContent,
  CategoryContainer,
  CategoryContent,
  ImageProduto,
  NameProduto,
  PrecoProduto,
  ProdutosContainer,
  ProdutosContent,
  TitleCardapio,
  TitleCategory,
} from "./cardapio.styles";

const Cardapio = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardapioContainer>
      <CardapioContent>
        <TitleCardapio>Consumiveis</TitleCardapio>
        <CategoryContainer>
          {categories.map((item) => (
            <CategoryContent key={item.id}>
              <TitleCategory>{item.displayName}</TitleCategory>
              <ProdutosContainer>
                {item.name === "Bebidas"
                  ? item.products.map((product) => (
                      <ProdutosContent key={product.id}>
                        <ImageProduto src={product.imageUrl} />
                        <NameProduto>{product.name}</NameProduto>
                        <PrecoProduto>R$ {product.price},00</PrecoProduto>
                      </ProdutosContent>
                    ))
                  : item.marks.map((mark) => (
                      <>
                        <TitleCategory>{mark.name}</TitleCategory>
                        {mark.products.map((product) => (
                          <ProdutosContent key={product.id}>
                            <ImageProduto src={product.imageUrl} />
                            <NameProduto>{product.name}</NameProduto>
                            <PrecoProduto>R${product.price},00</PrecoProduto>
                          </ProdutosContent>
                        ))}
                      </>
                    ))}
              </ProdutosContainer>
            </CategoryContent>
          ))}
        </CategoryContainer>
      </CardapioContent>
    </CardapioContainer>
  );
};
export default Cardapio;
