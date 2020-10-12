import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from "./components/page/Page";
import { Home } from "@material-ui/icons";
import Page3 from "./components/page/Page3";

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

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
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
              <Introduction
                scrollToRef={scrollToRef}
                portfolioRef={PortfolioRef}
              />
            </div>
            <div ref={PortfolioRef}>
              <Portfolio web={true} />
            </div>
            <Portfolio mobile />
            <div ref={AboutRef}>
              <About />
            </div>
          </Route>
          <Route path="/apps/:id">
            <>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Home className="appMenuIcon" />
              </Link>
              <Page3 />
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
