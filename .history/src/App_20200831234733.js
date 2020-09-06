import React, { useState, useRef } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const scrollToRef = (ref) => {
    ref.current &&
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };
  const MenuRef = useRef();
  const HomeRef = useRef();
  const PortfolioRef = useRef();
  const AboutRef = useRef();
  return (
    <div className="app">
      <Header
        toggle={toggle}
        setToggle={setToggle}
        scrollToRef={scrollToRef}
        menuRef={MenuRef}
      />
      <div ref={MenuRef}>
        <Menu
          toggle={toggle}
          scrollToRef={scrollToRef}
          homeRef={HomeRef}
          portfolioRef={PortfolioRef}
          aboutRef={AboutRef}
        />
      </div>
      <div ref={HomeRef}>
        <Introduction scrollToRef={scrollToRef} portfolioRef={PortfolioRef} />
      </div>
      <div ref={PortfolioRef}>
        <Portfolio />
      </div>
      <div ref={AboutRef}>
        <About />
      </div>
    </div>
  );
}

export default App;
