import { useContext, useState } from "react";
import { GiMagicHat } from "react-icons/gi";
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

const Header = () => {
  const { isAuthenticated, currentUser } = useContext(UserContext);
  const { categories } = useContext(CategoryContext);
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
    <HeaderContainer imageUrl={MaximusImage}>
      <GiMagicHat
        style={{ cursor: "pointer" }}
        color="#fff"
        size={50}
        onClick={() => navigate("/")}
      />
      <TitleHeader>Em densenvolvimento</TitleHeader>
      <div>
        <input
          type="text"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />
        {busca !== "" && (
          <div
            style={{
              position: "absolute",
              background: "white",
            }}
          >
            {frutasFiltrada.map((produto) => (
              <a href={`#${produto}`}>
                <ProductItemCompoent name={produto} />
              </a>
            ))}
          </div>
        )}
      </div>
      <ButtonContainer>
        {isAuthenticated && (
          <>
            <CustomButton onClick={handleCaixaClick}>Caixa</CustomButton>
            <CustomButton onClick={handleRequestClick}>Pedidos</CustomButton>
            <CustomButton onClick={handleFechamentoClick}>
              Fechamento
            </CustomButton>
            <CustomButton onClick={() => signOut(auth)}>
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
