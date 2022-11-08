import { useContext } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { UserContext } from "../../contexts/user/user.context";

import MaximusImage from "../../assets/Maximus_Image.jpeg";

import { HeaderContainer, TitleHeader } from "./header.styles";

const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <HeaderContainer imageUrl={MaximusImage}>
      <TitleHeader>Em densenvolvimento</TitleHeader>
      {isAuthenticated && <button onClick={() => signOut(auth)}>Teste</button>}
    </HeaderContainer>
  );
};
export default Header;
