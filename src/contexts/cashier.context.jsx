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
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    if (product.mark) {
      setProducts((prveState) => [
        ...prveState,
        { ...product, mark: product.mark, status: "pendente", quantity: 1 },
      ]);
    } else {
      setProducts((prveState) => [
        ...prveState,
        { ...product, status: "pendente", quantity: 1 },
      ]);
    }
  };

  const decreaseProductQuantity = (productId) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity;
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
