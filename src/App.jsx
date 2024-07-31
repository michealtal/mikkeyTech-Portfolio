import Test from "./Test";
import "./app.scss";
import Contact from "./component/contact/Contact";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Parallax from "./component/parallax/Parallax";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
