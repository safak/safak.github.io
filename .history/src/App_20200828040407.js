import React from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <Header />
      <Introduction />
    </div>
  );
}

export default App;
