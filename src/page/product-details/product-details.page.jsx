import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

import { CategoryContext } from "../../contexts/categories.context";

import {
  DetailsProductContainer,
  DetailsProductContent,
  EditProductContainer,
  ProductContainer,
} from "./product-details.style";

const ProductDetailsPage = () => {
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
            {category.subCategories.map((tipe) =>
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
export default ProductDetailsPage;
