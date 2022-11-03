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
            <CategoryContent>
              <TitleCategory>{item.displayName}</TitleCategory>
              <ProdutosContainer>
                {item.products.map((produto) => (
                  <ProdutosContent>
                    <ImageProduto src={produto.imageUrl} />
                    <NameProduto key={produto.id}>{produto.name}</NameProduto>
                    ---
                    <PrecoProduto>R${produto.price},00 </PrecoProduto>
                  </ProdutosContent>
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
