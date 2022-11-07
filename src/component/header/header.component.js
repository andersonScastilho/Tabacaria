import { signOut } from "firebase/auth";
import React from "react";
import MaximusImage from "../../assets/Maximus_Image.jpeg";
import { auth } from "../../config/firebase.config";
import { HeaderContainer, TitleHeader } from "./header.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user/user.context";
const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <HeaderContainer imageUrl={MaximusImage}>
      <TitleHeader>Maximus LoungeBar</TitleHeader>
      {isAuthenticated && <button onClick={() => signOut(auth)}>Teste</button>}
    </HeaderContainer>
  );
};
export default Header;
