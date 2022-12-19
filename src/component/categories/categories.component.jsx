import { useEffect, useContext } from "react";

import CategoryItem from "../category-item/category-item.component";

import { CategoryContext } from "../../contexts/categories.context";

import { CategoriesContainer, CategoriesContent } from "./categories.styles";

const Categories = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((categories) =>
          categories.subCategories.map((subCategory) => (
            <div key={subCategory.id}>
              <CategoryItem category={categories} subCategory={subCategory} />
            </div>
          ))
        )}
      </CategoriesContent>
    </CategoriesContainer>
  );
};
export default Categories;
