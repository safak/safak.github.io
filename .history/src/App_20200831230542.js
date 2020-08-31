import React, { useState, useRef, forwardRef } from "react";
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
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  };
  const ref = forwardRef(null);

  console.log(ref)
  return (
    <div className="app">
      <button onClick={() => scrollToRef(ref)}>heyo</button>
      <Header toggle={toggle} setToggle={setToggle} />
      <Menu toggle={toggle} scrollToRef={scrollToRef} intRef={ref} />
      <Introduction/>
      <Portfolio ref={ref} />
      <About />
    </div>
  );
}

export default App;
