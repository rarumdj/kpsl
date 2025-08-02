import About from "components/about";
import Hero from "components/hero";
import Portfolio from "page/portfolio";
import TrustedClients from "components/TrustedClients";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TrustedClients />
      <Portfolio />
    </>
  );
};

export default Home;
