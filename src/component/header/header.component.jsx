import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Spin as Hamburger, Spin } from "hamburger-react";

import { GiMagicHat } from "react-icons/gi";
import { UserContext } from "../../contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { RiLogoutBoxRLine } from "react-icons/ri";

import CustomButton from "../custom-button/custom-button.component";

import {
  ButtonContainer,
  HeaderContainer,
  TitleHeader,
  IconeHeader,
  SpinMenu,
  MenuContainer,
  MenuContent,
  MenuTitle,
  ButtonMenu,
  HeaderMenu,
  SpinHeader,
} from "./header.styles";

const Header = ({ searchProducts }) => {
  const { isAuthenticated } = useContext(UserContext);

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
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisiblit = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
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
      <SpinHeader oculto={isVisible} onClick={handleChangeVisiblit}>
        <Spin toggled={isVisible} />
      </SpinHeader>{" "}
      <MenuContainer isVisible={isVisible}>
        <MenuContent>
          <HeaderMenu>
            <MenuTitle>Menu</MenuTitle>
            <SpinMenu onClick={handleChangeVisiblit}>
              <Spin toggled={isVisible} />
            </SpinMenu>
          </HeaderMenu>
          {isAuthenticated && (
            <>
              <ButtonMenu onClick={handleCaixaClick}>Caixa</ButtonMenu>
              <ButtonMenu onClick={handleRequestClick}>Pedidos</ButtonMenu>
              <ButtonMenu onClick={handleFechamentoClick}>
                Fechamento
              </ButtonMenu>
              <ButtonMenu onClick={() => signOut(auth)}>
                Sair
                <RiLogoutBoxRLine size={15} />
              </ButtonMenu>
            </>
          )}
          {!isAuthenticated && (
            <ButtonMenu onClick={handleLoginClick}>Login</ButtonMenu>
          )}
        </MenuContent>
      </MenuContainer>
    </HeaderContainer>
  );
};
export default Header;
