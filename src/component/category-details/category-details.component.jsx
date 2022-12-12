import { useEffect, useContext } from "react";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";

import ProductMenu from "../menu-product/product-menu.component";

import { CategoryContext } from "../../contexts/categories.context";

import {
  CategoryDetailsContainer,
  CategoryDetailsContent,
} from "./category-details.style";

const CategoryDetailsPage = ({ categoryId, subCategoryId }) => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const currentCategory = [];

  const category = categories?.filter((category) => {
    return category.id === categoryId;
  });

  category.filter((subCategory) => {
    subCategory.tipeOrMark.forEach((subCategory) => {
      subCategory.id === subCategoryId ? (
        currentCategory.push(subCategory)
      ) : (
        <></>
      );
    });
  });

  return (
    <>
      <Header />
      <CategoryDetailsContainer>
        <p>{currentCategory[0]?.name}</p>
        <CategoryDetailsContent>
          {currentCategory[0]?.products.map((product) => (
            <ProductMenu product={product} />
          ))}
        </CategoryDetailsContent>
      </CategoryDetailsContainer>
      <Footer />
    </>
  );
};
export default CategoryDetailsPage;
