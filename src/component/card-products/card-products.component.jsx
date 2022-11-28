import { useContext } from "react";

import { CategoryContext } from "../../contexts/categories.context";
import { UserContext } from "../../contexts/user.context";
import { CaixaContext } from "../../contexts/caixa.context";

import CustomButton from "../custom-button/custom-button.component";
import LoadingComponent from "../loading/loading.component";

import {
  MenuContainer,
  MenuContent,
  ImageProduct,
  NameProduct,
  PriceProduct,
  ProductsContainer,
  ProductsContent,
  TitleCategory,
  MarkRosh,
  TipeDrinks,
} from "./card-products.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CardProducts = (props) => {
  const { categories, isLoading } = useContext(CategoryContext);
  const { addProductsToPedido } = useContext(CaixaContext);
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  const handleAddProductsToPedido = (product) => {
    addProductsToPedido(product);
  };
  const [busca, setBusca] = useState("");

  const allfrutas = [];

  categories.map((category) =>
    category.name === "Bebidas" ? (
      category.tipes.map((type) =>
        type.products.map((product) => allfrutas.push(product))
      )
    ) : (
      <p key={"oi"}></p>
    )
  );

  const frutas = [];
  allfrutas.filter((fruta) => frutas.push(fruta.name));

  const LowerBuscar = busca.toLowerCase();

  const frutasFiltrada = frutas?.filter((fruta) =>
    fruta.toLowerCase().includes(LowerBuscar)
  );

  return (
    <MenuContainer imageUrl="https://www.dicasecuriosidades.net/wp-content/uploads/2019/05/gandalf-facts.jpg">
      {isLoading && <LoadingComponent />}
      <div>
        <input
          type="text"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />
        <ul>
          {frutasFiltrada.map((produto) => (
            <li style={{ color: "white" }} key={produto.id}>
              {produto}
            </li>
          ))}
        </ul>
      </div>
      {categories.map((category) => (
        <MenuContent key={category.id}>
          <TitleCategory>{category.name}</TitleCategory>
          {category.name === "Bebidas"
            ? category.tipes.map((tipe) => (
                <ProductsContainer key={tipe.id}>
                  <TipeDrinks>{tipe.name}</TipeDrinks>
                  {tipe.products.map((product) => (
                    <ProductsContent key={product.id}>
                      <ImageProduct src={product.imageUrl} />
                      <NameProduct>{product.name}</NameProduct>
                      <PriceProduct>R${product.price},00</PriceProduct>
                      {/* {isAuthenticated && props.edit === true ? (
                        <CustomButton
                          key={product.id}
                          onClick={() =>
                            handleProductDetails(
                              category.id,
                              tipe.id,
                              product.id
                            )
                          }
                        >
                          Editar Produto
                        </CustomButton>
                      ) : null} */}
                      {props.customButton ? (
                        <CustomButton
                          key={product.id}
                          onClick={() => handleAddProductsToPedido(product)}
                        >
                          {props.customButton}
                        </CustomButton>
                      ) : null}
                    </ProductsContent>
                  ))}
                </ProductsContainer>
              ))
            : category.marks.map((mark) => (
                <ProductsContainer key={mark.id}>
                  <MarkRosh>{mark.name}</MarkRosh>
                  {mark.products.map((product) => (
                    <ProductsContent key={product.id}>
                      <ImageProduct src={product.imageUrl} />
                      <NameProduct>{product.name}</NameProduct>
                      <PriceProduct>R${product.price},00</PriceProduct>
                      {/* {isAuthenticated && props.edit === true ? (
                        <CustomButton
                          key={product.id}
                          onClick={() =>
                            handleProductDetails(
                              category.id,
                              mark.id,
                              product.id
                            )
                          }
                        >
                          Editar Produto
                        </CustomButton>
                      ) : null} */}
                      {props.customButton ? (
                        <CustomButton
                          key={product.id}
                          onClick={() => handleAddProductsToPedido(product)}
                        >
                          {props.customButton}
                        </CustomButton>
                      ) : null}
                    </ProductsContent>
                  ))}
                </ProductsContainer>
              ))}
        </MenuContent>
      ))}
    </MenuContainer>
  );
};
export default CardProducts;
