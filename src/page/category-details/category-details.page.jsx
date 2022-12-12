import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryDetails from "../../component/category-details/category-details.component";
import { CategoryContext } from "../../contexts/categories.context";

const CategoryDetailsPage = () => {
  const { categoryId, subCategoryId } = useParams();
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
      <CategoryDetails category={currentCategory[0]} />
    </>
  );
};
export default CategoryDetailsPage;
