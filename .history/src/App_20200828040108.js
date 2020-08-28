import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="app">
      <Menu />
      <Header />
      <Introduction />
    </div>
  );
}

export default App;
