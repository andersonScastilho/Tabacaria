import {
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
} from "./product.style";
import { BsPlus } from "react-icons/bs";

import { useContext } from "react";

import { CaixaContext } from "../../contexts/caixa.context";

import CustomButton from "../custom-button/custom-button.component";

const ProductItemComponent = ({ product, button }) => {
  const { addProductsToPedido } = useContext(CaixaContext);

  const handleAddProductToCaixa = (product) => {
    addProductsToPedido(product);
  };

  return (
    <ProductsContainer>
      <ImageProduct src={product.imageUrl} />
      <NameProduct>{product.name}</NameProduct>
      {product.price && <PriceProduct>{product.price},00</PriceProduct>}
      {button === true ? (
        <CustomButton onClick={() => handleAddProductToCaixa(product)}>
          {<BsPlus />}
        </CustomButton>
      ) : null}
    </ProductsContainer>
  );
};
export default ProductItemComponent;
