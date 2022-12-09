import { CategoryContainer, CategoryName } from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();

  const handleExploreClick = (id) => {
    navigate(`/category/detalhes/${id}`);
  };

  return (
    <CategoryContainer backgroundimage={category.imageUrl}>
      <CategoryName onClick={() => handleExploreClick(category.id)}>
        <p>{category.name}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryContainer>
  );
};
export default CategoryItem;
