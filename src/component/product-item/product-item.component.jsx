import { BsPlus } from "react-icons/bs";

import CustomButton from "../custom-button/custom-button.component";

import {
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
} from "./product-item.style";

const ProductItemComponent = ({ product, button, onClick, mark }) => {
  return (
    <ProductsContainer>
      <ImageProduct src={product.imageUrl} />
      {mark ? (
        product.mark ? (
          <NameProduct>
            {product.mark} - {product.name}
          </NameProduct>
        ) : (
          <NameProduct>{product.name}</NameProduct>
        )
      ) : (
        <NameProduct>{product.name}</NameProduct>
      )}
      {product.price && <PriceProduct>{product.price},00</PriceProduct>}
      {button === true ? (
        <CustomButton onClick={onClick}>{<BsPlus />}</CustomButton>
      ) : null}
    </ProductsContainer>
  );
};
export default ProductItemComponent;
