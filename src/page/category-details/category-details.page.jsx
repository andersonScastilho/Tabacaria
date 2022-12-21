import { useParams } from "react-router-dom";

import Header from "../../component/header/header.component";
import CategoryDetails from "../../component/category-details/category-details.component";
import { useContext, useEffect } from "react";
import { CategoryContext } from "../../contexts/categories.context";

const CategoryDetailsPage = () => {
  const { categoryId, subCategoryId } = useParams();
  const { fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <Header />
      <CategoryDetails categoryId={categoryId} subCategoryId={subCategoryId} />
    </>
  );
};
export default CategoryDetailsPage;
