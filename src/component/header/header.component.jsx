import { useNavigate } from "react-router-dom";
import { useContext, useState, useMemo } from "react";

import { GiMagicHat } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { UserContext } from "../../contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CategoryContext } from "../../contexts/categories.context";
import { CashierContext } from "../../contexts/cashier.context";

import CustomButton from "../custom-button/custom-button.component";
import ProductItemCompoent from "../product-item/product-item.component";

import {
  ButtonContainer,
  HeaderContainer,
  InputSearch,
  SearchContainer,
  SearchContent,
  TitleHeader,
  SearchProductContainer,
  IconeHeader,
} from "./header.styles";
import { useEffect } from "react";

const Header = ({ searchProducts }) => {
  const { isAuthenticated } = useContext(UserContext);
  const { categories, fetchCategories } = useContext(CategoryContext);
  const { addProductsToRequest } = useContext(CashierContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate("/pedidos");
  };
  const handleCaixaClick = () => {
    navigate("/caixa");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleFechamentoClick = () => {
    navigate("/fechamento");
  };
  const [search, setSearch] = useState("");

  const allProducts = [];

  categories.map((category) =>
    category.tipeOrMark.map((type) =>
      type.products.map((product) => allProducts.push(product))
    )
  );

  const products = [];

  allProducts.filter((product) => products.push(product));

  const productsFiltred = useMemo(() => {
    const LowerBuscar = search.toLowerCase();
    return products.filter((product) =>
      product.mark
        ? product.mark.toLowerCase().includes(LowerBuscar) ||
          product.name.toLowerCase().includes(LowerBuscar)
        : product.name.toLowerCase().includes(LowerBuscar)
    );
  }, [search]);

  const handleAddProductToCashier = (product) => {
    addProductsToRequest(product);
    setSearch("");
  };

  return (
    <HeaderContainer>
      <IconeHeader>
        <GiMagicHat
          cursor="pointer"
          color="#fff"
          size={50}
          onClick={() => navigate("/")}
        />
      </IconeHeader>
      <TitleHeader>Maximu's Lounge Bar</TitleHeader>
      {searchProducts && (
        <SearchContainer>
          <SearchContent>
            <InputSearch
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <p
              style={{
                position: " relative",
                left: "-30px",
                top: "4px",
              }}
            >
              {<BsSearch size={22} />}
            </p>
          </SearchContent>
          {search !== "" && productsFiltred.length !== 0 && (
            <SearchProductContainer>
              {productsFiltred.map((product) => (
                <ProductItemCompoent
                  key={product.id}
                  mark={true}
                  button={true}
                  product={product}
                  onClick={() => handleAddProductToCashier(product)}
                />
              ))}
            </SearchProductContainer>
          )}
        </SearchContainer>
      )}
      <ButtonContainer>
        {isAuthenticated && (
          <>
            <CustomButton onClick={handleCaixaClick}>Caixa</CustomButton>
            <CustomButton onClick={handleRequestClick}>Pedidos</CustomButton>
            <CustomButton onClick={handleFechamentoClick}>
              Fechamento
            </CustomButton>
            <CustomButton onClick={() => signOut(auth)}>
              Sair
              <RiLogoutBoxRLine size={15} />
            </CustomButton>
          </>
        )}
        {!isAuthenticated && (
          <CustomButton onClick={handleLoginClick}>Login</CustomButton>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
};
export default Header;
