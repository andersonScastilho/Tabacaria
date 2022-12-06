import { useContext } from "react";

import ProductItemComponent from "../product-item/product-item.component";

import { CategoryContext } from "../../contexts/categories.context";
import { CashierContext } from "../../contexts/cashier.context";

import {
  MenuContainer,
  MenuContent,
  ProductContainer,
  ProductContent,
  TipeOrMarkName,
  TitleCategory,
} from "./menu.styles";
import { useEffect } from "react";

const MenuComponent = (props) => {
  const { categories, fetchCategories } = useContext(CategoryContext);
  const { addProductsToRequest } = useContext(CashierContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddProductToCaixa = (product) => {
    addProductsToRequest(product);
  };

  return (
    <MenuContainer>
      {categories.map((category) => (
        <>
          <TitleCategory>{category.name}</TitleCategory>
          <MenuContent key={category.id}>
            {category.tipeOrMark.map((tipe) => (
              <ProductContainer>
                <TipeOrMarkName>{tipe.name}</TipeOrMarkName>
                <ProductContent>
                  {tipe.products.map((product) => (
                    <ProductItemComponent
                      key={product.id}
                      product={product}
                      id={product.name}
                      button={props.button}
                      onClick={() => handleAddProductToCaixa(product)}
                    />
                  ))}
                </ProductContent>
              </ProductContainer>
            ))}
          </MenuContent>
        </>
      ))}
    </MenuContainer>
  );
};
export default MenuComponent;
