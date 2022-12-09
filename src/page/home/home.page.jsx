import Categories from "../../component/categories/categories.component";
import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import MenuComponent from "../../component/menu/menu.component";

import { HomeContainer } from "./home.styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
};
export default HomePage;
