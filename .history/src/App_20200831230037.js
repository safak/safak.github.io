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
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };
  const ref = useRef(null);
  return (
    <div className="app">
      <button
        onClick={() =>
          window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop })
        }
      >
        heyo
      </button>
      <Header toggle={toggle} setToggle={setToggle} />
      <Menu toggle={toggle} scrollToRef={scrollToRef} intRef={ref} />
      <Introduction ref={ref} />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
