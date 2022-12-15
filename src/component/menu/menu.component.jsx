import { useContext, useEffect } from "react";

import { CategoryContext } from "../../contexts/categories.context";
import { CashierContext } from "../../contexts/cashier.context";

import ProductItemComponent from "../product-item/product-item.component";

import { MenuContainer, MenuContent } from "./menu.styles";

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
      {categories.map((category) =>
        category.tipeOrMark.map((tipe) =>
          tipe.products.map((product) => (
            <ProductItemComponent
              key={product.id}
              product={product}
              id={product.name}
              button={props.button}
              onClick={() => handleAddProductToCaixa(product)}
            />
          ))
        )
      )}
    </MenuContainer>
  );
};
export default MenuComponent;
