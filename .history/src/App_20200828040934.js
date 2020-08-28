import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="app">
      <Header setToggle={setToggle}/>
      <Menu toggle={toggle} />
      <Introduction />
    </div>
  );
}

export default App;
