import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { RiLogoutBoxRLine } from "react-icons/ri";

import CustomButton from "../custom-button/custom-button.component";
import MaximusImage from "../../assets/Maximus_Image.jpeg";

import { HeaderContainer, TitleHeader } from "./header.styles";

const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <HeaderContainer imageUrl={MaximusImage}>
      <TitleHeader>Em densenvolvimento</TitleHeader>
      {isAuthenticated && (
        <CustomButton onClick={() => signOut(auth)}>
          <RiLogoutBoxRLine size={15} />
        </CustomButton>
      )}
    </HeaderContainer>
  );
};
export default Header;
