import { useEffect, useContext } from "react";

import { CategoryContext } from "../../contexts/categories.context";
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

const Categories = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) =>
          category.tipeOrMark.map((category) => (
            <div key={category.id}>
              <CategoryItem category={category} />
            </div>
          ))
        )}
      </CategoriesContent>
    </CategoriesContainer>
  );
};
export default Categories;
