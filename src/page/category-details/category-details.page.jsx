import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";

import ProductMenu from "../../component/menu-product/product-menu.component";

import { CategoryContext } from "../../contexts/categories.context";

import {
  CategoryDetailsContainer,
  CategoryDetailsContent,
} from "./category-details.style";

const CategoryDetailsPage = () => {
  const { id } = useParams();
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  let currentCategory;

  categories.forEach((category) => {
    category.tipeOrMark.forEach((subCategory) => {
      if (subCategory.id === id) {
        currentCategory = subCategory;
      }
    });
  });

  return (
    <>
      <Header />
      <CategoryDetailsContainer>
        <p>{currentCategory?.name}</p>
        <CategoryDetailsContent>
          {currentCategory.products.map((product) => (
            <ProductMenu product={product} />
          ))}
        </CategoryDetailsContent>
      </CategoryDetailsContainer>
      <Footer />
    </>
  );
};
export default CategoryDetailsPage;
