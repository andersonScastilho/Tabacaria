import React from "react";
import MaximusImage from "../../assets/Maximus_Image.jpeg";
import { HeaderContainer, TitleHeader } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer imageUrl={MaximusImage}>
      <TitleHeader>Maximus LoungeBar</TitleHeader>
    </HeaderContainer>
  );
};
export default Header;
