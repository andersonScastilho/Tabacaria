import { CategoryContainer, CategoryName } from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category, subCategory }) => {
  const navigate = useNavigate();

  const handleExploreClick = (categoryId, subCategoryId) => {
    navigate(`/category/detalhes/${categoryId}/${subCategoryId}`);
  };

  return (
    <CategoryContainer backgroundimage={subCategory.imageUrl}>
      <CategoryName
        onClick={() => handleExploreClick(category.id, subCategory.id)}
      >
        <p>{subCategory.name}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryContainer>
  );
};
export default CategoryItem;
