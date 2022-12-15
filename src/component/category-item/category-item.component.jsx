import { useNavigate } from "react-router-dom";

import { CategoryContainer, CategoryName } from "./category-item.styles";

const CategoryItem = ({ category, subCategory }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/category/detalhes/${category.id}/${subCategory.id}`);
  };

  return (
    <CategoryContainer backgroundimage={subCategory.imageUrl}>
      <CategoryName
        onClick={handleExploreClick}
      >
        <p>{subCategory.name}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryContainer>
  );
};
export default CategoryItem;
