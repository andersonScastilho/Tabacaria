import ProductMenu from "../menu-product/product-menu.component";
import { useContext, useEffect } from "react";
import { CategoryContext } from "../../contexts/categories.context";

import {
  CategoryTitle,
  Container,
  ProductsContainer,
} from "./category-details.style";

const CategoryDetails = ({ categoryId, subCategoryId }) => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const currentCategory = [];

  const category = categories?.filter((category) => {
    return category.id === categoryId;
  });
  category.forEach((subCategory) => {
    subCategory.tipeOrMark.forEach((subCategory) => {
      subCategory.id === subCategoryId ? (
        currentCategory.push(subCategory)
      ) : (
        <></>
      );
    });
  });
  return (
    <Container>
      <CategoryTitle>
        <p>{currentCategory[0]?.name}</p>
      </CategoryTitle>
      <ProductsContainer>
        {currentCategory[0]?.products.map((product) => (
          <ProductMenu key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
export default CategoryDetails;
