import {
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
} from "./product-item.style";
import { BsPlus } from "react-icons/bs";

import CustomButton from "../custom-button/custom-button.component";

const ProductItemComponent = ({ product, button, onClick }) => {
  return (
    <ProductsContainer>
      <ImageProduct src={product.imageUrl} />
      <NameProduct>{product.name}</NameProduct>
      {product.price && <PriceProduct>{product.price},00</PriceProduct>}
      {button === true ? (
        <CustomButton onClick={onClick}>{<BsPlus />}</CustomButton>
      ) : null}
    </ProductsContainer>
  );
};
export default ProductItemComponent;
