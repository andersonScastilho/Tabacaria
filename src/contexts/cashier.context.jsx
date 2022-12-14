import { useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";

export const CashierContext = createContext({
  products: [],
  addProductsToRequest: () => {},
  decreaseProductQuantity: () => {},
  clearProducts: () => {},
});

const CashierContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProductsToRequest = (product) => {
    const productAlreadInCart = products.some((item) => item.id === product.id);
    if (productAlreadInCart) {
      return setProducts((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, solicitedQuantity: item.solicitedQuantity  + 1 }
            : item
        )
      );
    }
    if (product.mark) {
      setProducts((prveState) => [
        ...prveState,
        { ...product, mark: product.mark, servedQuantity:0, solicitedQuantity: 1},
      ]);
    } else {
      setProducts((prveState) => [
        ...prveState,
        { ...product, servedQuantity: 0 , solicitedQuantity: 1 },
      ]);
    }
  };

  const decreaseProductQuantity = (productId) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, solicitedQuantity: product.solicitedQuantity - 1 }
            : product
        )
        .filter((product) => product.solicitedQuantity > 0)
    );
  };

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.solicitedQuantity;
    }, 0);
  }, [products]);

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <CashierContext.Provider
      value={{
        products,
        productsTotalPrice,
        addProductsToRequest,
        clearProducts,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CashierContext.Provider>
  );
};
export default CashierContextProvider;
