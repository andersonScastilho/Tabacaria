import React from "react";
import { CategoryContainer, CategoryDisplayName } from "./category-item.styles";

const CategoryItem = ({ category }) => {
  return (
    <CategoryContainer backgroundImage={category.imageUrl}>
      <CategoryDisplayName>{category.displayName}</CategoryDisplayName>
    </CategoryContainer>
  );
};
export default CategoryItem;
