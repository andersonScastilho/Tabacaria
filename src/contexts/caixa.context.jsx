import { useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";

export const CaixaContext = createContext({
  products: [],
  addProductsToPedido: () => {},
  decreaseProductQuantity: () => {},
  clearProducts: () => {},
});

const CaixaContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProductsToPedido = (product) => {
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
    setProducts((prveState) => [...prveState, { ...product, quantity: 1 }]);
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
    <CaixaContext.Provider
      value={{
        products,
        productsTotalPrice,
        addProductsToPedido,
        clearProducts,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CaixaContext.Provider>
  );
};
export default CaixaContextProvider;
