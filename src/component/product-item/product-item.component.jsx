import {
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
} from "./product.style";
import { BsPlus } from "react-icons/bs";

import CustomButton from "../custom-button/custom-button.component";
const ProductItemComponent = ({ imageUrl, name, price, button }) => {
  return (
    <ProductsContainer>
      <ImageProduct src={imageUrl} />
      <NameProduct>{name}</NameProduct>
      <PriceProduct>{price},00</PriceProduct>
      {button === true ? <CustomButton>{<BsPlus />}</CustomButton> : null}
    </ProductsContainer>
  );
};
export default ProductItemComponent;
