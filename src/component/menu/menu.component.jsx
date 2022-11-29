import { useContext } from "react";

import ProductItemComponent from "../product-item/product-item.component";

import { CategoryContext } from "../../contexts/categories.context";
import { CashierContext } from "../../contexts/cashier.context";

import {
  MenuContainer,
  MenuContent,
  ProductContainer,
  TipeOrMarkName,
  TitleCategory,
} from "./menu.styles";

const MenuComponent = (props) => {
  const { categories } = useContext(CategoryContext);
  const { addProductsToPedido } = useContext(CashierContext);

  const handleAddProductToCaixa = (product) => {
    addProductsToPedido(product);
  };
  return (
    <MenuContainer>
      {categories.map((category) => (
        <MenuContent key={category.id}>
          <TitleCategory>{category.name}</TitleCategory>
          {category.tipeOrMark.map((tipe) => (
            <ProductContainer>
              <TipeOrMarkName>{tipe.name}</TipeOrMarkName>
              {tipe.products.map((product) => (
                <ProductItemComponent
                  key={product.id}
                  product={product}
                  id={product.name}
                  button={props.button}
                  onClick={() => handleAddProductToCaixa(product)}
                />
              ))}
            </ProductContainer>
          ))}
        </MenuContent>
      ))}
    </MenuContainer>
  );
};
export default MenuComponent;
