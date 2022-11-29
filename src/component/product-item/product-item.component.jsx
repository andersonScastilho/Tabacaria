import {
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
} from "./product.style";
import { BsPlus } from "react-icons/bs";

import CustomButton from "../custom-button/custom-button.component";
const ProductItemComponent = ({ product, button }) => {
  return (
    <ProductsContainer>
      <ImageProduct src={product.imageUrl} />
      <NameProduct>{product.name}</NameProduct>
      {product.price && <PriceProduct>{product.price},00</PriceProduct>}
      {button === true ? <CustomButton>{<BsPlus />}</CustomButton> : null}
    </ProductsContainer>
  );
};
export default ProductItemComponent;
