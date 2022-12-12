import { useParams } from "react-router-dom";
import CategoryDetails from "../../component/category-details/category-details.component";
import Header from "../../component/header/header.component";

const CategoryDetailsPage = () => {
  const { categoryId, subCategoryId } = useParams();

  return (
    <>
      <Header />
      <CategoryDetails categoryId={categoryId} subCategoryId={subCategoryId} />
    </>
  );
};
export default CategoryDetailsPage;
