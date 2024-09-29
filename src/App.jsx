import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenProducts from "./components/MenProducts";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import WomenProducts from "./components/WomenProducts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WomenProducts />
      <MenProducts />
      <Products />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
