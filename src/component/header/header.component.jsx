import { useContext, useState } from "react";
import { GiMagicHat } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { UserContext } from "../../contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { RiLogoutBoxRLine } from "react-icons/ri";

import CustomButton from "../custom-button/custom-button.component";
import MaximusImage from "../../assets/Maximus_Image.jpeg";
import ProductItemCompoent from "../product-item/product-item.component";

import { ButtonContainer, HeaderContainer, TitleHeader } from "./header.styles";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../contexts/categories.context";
import { CashierContext } from "../../contexts/cashier.context";
import { useMemo } from "react";
const Header = (props) => {
  const { isAuthenticated } = useContext(UserContext);
  const { categories } = useContext(CategoryContext);
  const { addProductsToPedido } = useContext(CashierContext);

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
  const [busca, setBusca] = useState("");

  const allProducts = [];

  categories.map((category) =>
    category.tipeOrMark.map((type) =>
      type.products.map((product) => allProducts.push(product))
    )
  );

  const products = [];

  allProducts.filter((product) => products.push(product));

  const productsFiltred = useMemo(() => {
    const LowerBuscar = busca.toLowerCase();

    return products.filter((product) =>
      product.name.toLowerCase().includes(LowerBuscar)
    );
  }, [busca]);

  const handleAddProductToCashier = (product) => {
    addProductsToPedido(product);
    setBusca("");
  };

  return (
    <HeaderContainer imageUrl={MaximusImage}>
      <GiMagicHat
        style={{ cursor: "pointer" }}
        color="#fff"
        size={50}
        onClick={() => navigate("/")}
      />
      <TitleHeader>Em densenvolvimento</TitleHeader>
      {props.search && (
        <div>
          <div
            style={{
              display: "flex",
              padding: "3px",
            }}
          >
            <input
              style={{ borderRadius: "5px", padding: "4px" }}
              type="text"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />
            <p style={{ marginLeft: "-25px", marginTop: "7px" }}>
              <BsSearch size={17} color="black" />
            </p>
          </div>
          {busca !== "" && productsFiltred.length !== 0 && (
            <div
              style={{
                position: "absolute",
                background: "white",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                maxHeight: "400px",
                overflow: "auto ",
                backgroundColor: "darkgray",
                padding: "7px",
              }}
            >
              {productsFiltred.map((product) => (
                <ProductItemCompoent
                  mark={true}
                  button={true}
                  product={product}
                  onClick={() => handleAddProductToCashier(product)}
                />
              ))}
            </div>
          )}
        </div>
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
