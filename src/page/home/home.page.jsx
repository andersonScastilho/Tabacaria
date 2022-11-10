import CardProducts from "../../component/card-products/card-products.component";
import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import { HomeContainer } from "./home.styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <CardProducts />
      </HomeContainer>
      <Footer />
    </>
  );
};
export default HomePage;
