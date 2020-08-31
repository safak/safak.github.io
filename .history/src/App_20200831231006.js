import React, { useState, useRef } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

function App() {
  const [toggle, setToggle] = useState(false);
  const scrollToRef = (ref) => {
    ref.current &&
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };
  const HomeRef = useRef();
  const PortfolioRef = useRef();
  const AboutRef = useRef();
  return (
    <div className="app">
      <Header toggle={toggle} setToggle={setToggle} />
      <Menu
        toggle={toggle}
        scrollToRef={scrollToRef}
        homeRef={HomeRef}
        portfolioRef={PortfolioRef}
        aboutRef={AboutRef}
      />
      <div ref={HomeRef}>
        <Introduction />
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
