import { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

import ProductMenu from "../menu-product/product-menu.component";
import LoadingComponent from "../../component/loading/loading.component";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import {
  ButtonReturn,
  CategoryTitle,
  Container,
  ProductsContainer,
} from "./category-details.style";
import { useNavigate } from "react-router-dom";

const CategoryDetails = ({ categoryId, subCategoryId }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategory = async () => {
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
    fetchCategory();
  }, []);

  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  const currentCategory = [];

  const category = categories?.filter((category) => {
    return category.id === categoryId;
  });

  category.forEach((subCategory) => {
    subCategory.subCategories.forEach((subCategory) => {
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
        <ButtonReturn onClick={returnToHome}>
          <HiChevronLeft size={35} />
        </ButtonReturn>
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
