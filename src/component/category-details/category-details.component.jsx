import { useEffect,useState } from "react";

import ProductMenu from "../menu-product/product-menu.component";
import LoadingComponent from "../../component/loading/loading.component";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import {
  CategoryTitle,
  Container,
  ProductsContainer,
} from "./category-details.style";


const CategoryDetails = ({ categoryId, subCategoryId }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategorie = async () => {
    try {
      setIsLoading(true);
      const categoriesFromFirestore = [];

      const docRef = doc(db, "Categories", categoryId);
      const docSnap = await getDoc(docRef);
      categoriesFromFirestore.push(docSnap.data());
      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategorie();
  }, []);

  const currentCategory = [];

  const category = categories?.filter((category) => {
    return category.id === categoryId;
  });

  category.forEach((subCategory) => {
    subCategory.tipeOrMark.forEach((subCategory) => {
      subCategory.id === subCategoryId ? (
        currentCategory.push(subCategory)
      ) : (
        <></>
      );
    });
  });

  return (
    <Container>
      {isLoading && <LoadingComponent />}
      <CategoryTitle>
        <p>{currentCategory[0]?.name}</p>
      </CategoryTitle>
      <ProductsContainer>
        {currentCategory[0]?.products.map((product) => (
          <ProductMenu key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
export default CategoryDetails;
