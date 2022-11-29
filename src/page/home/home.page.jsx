import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import MenuComponent from "../../component/menu/menu.component";

import { HomeContainer } from "./home.styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <MenuComponent />
      </HomeContainer>
      <Footer />
    </>
  );
};
export default HomePage;
