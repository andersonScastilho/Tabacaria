import Header from "../header/header.component";
import Footer from "../footer/footer.component";

import ProductMenu from "../menu-product/product-menu.component";

import {
  CategoryDetailsContainer,
  CategoryDetailsContent,
} from "./category-details.style";

const CategoryDetails = ({ category }) => {
  return (
    <>
      <Header />
      <CategoryDetailsContainer>
        <p>{category?.name}</p>
        <CategoryDetailsContent>
          {category?.products.map((product) => (
            <ProductMenu product={product} />
          ))}
        </CategoryDetailsContent>
      </CategoryDetailsContainer>
      <Footer />
    </>
  );
};
export default CategoryDetails;
