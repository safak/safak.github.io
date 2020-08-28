import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="app">
      <Header toggle={toggle} setToggle={setToggle}/>
      <Menu toggle={toggle} />
      <Introduction />
      <Portfolio />
    </div>
  );
}

export default App;
