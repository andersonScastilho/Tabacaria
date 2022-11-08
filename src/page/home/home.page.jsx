import Cardapio from "../../component/cart-products/cart-products.component";
import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import { HomeContainer } from "./home.styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Cardapio />
      </HomeContainer>
      <Footer />
    </>
  );
};
export default HomePage;
