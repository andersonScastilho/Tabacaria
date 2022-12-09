import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./product-menu.styles";

const ProductMenu = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};
export default ProductMenu;
