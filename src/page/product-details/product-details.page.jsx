import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../contexts/categories.context";
import { BsPencil } from "react-icons/bs";
import { useState } from "react";
import {
  DetailsProductContainer,
  DetailsProductContent,
  EditProductContainer,
  ProductContainer,
} from "./product-details.style";

const ProductDetails = () => {
  const { categories } = useContext(CategoryContext);
  const { categoryId, typeormarkId, produtoId } = useParams();

  const [clickOnButtonPrice, setClickOnButtonPrice] = useState(0);

  let infoNumber;

  if (clickOnButtonPrice % 2 === 0) {
    infoNumber = "par";
  } else {
    infoNumber = "impar";
  }

  const handleEditPriceClick = () => {
    setClickOnButtonPrice((prevState) => prevState + 1);
  };

  return (
    <DetailsProductContainer>
      {categories.map((category) =>
        category.id === categoryId ? (
          <DetailsProductContent key={category.id}>
            <h3 style={{ margin: "0 auto" }}>Produto</h3>
            {category.tipeOrMark.map((tipe) =>
              tipe.id === typeormarkId
                ? tipe.products.map((product) =>
                    product.id === produtoId ? (
                      <ProductContainer key={product.id}>
                        <p>Item: {product.name}</p>
                        <EditProductContainer>
                          Preço {product.price}
                          <BsPencil
                            cursor="pointer"
                            color="darkgray"
                            onClick={handleEditPriceClick}
                          />
                          {infoNumber === "impar" ? (
                            <input type="text" />
                          ) : null}
                        </EditProductContainer>
                      </ProductContainer>
                    ) : null
                  )
                : null
            )}
          </DetailsProductContent>
        ) : null
      )}
    </DetailsProductContainer>
  );
};
export default ProductDetails;
