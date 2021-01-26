import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import Me from "./pages/Me";
import ContactUs from "./pages/ContactUs";
import {AnimatePresence} from "framer-motion";
import Qualifications from "./pages/Qualifications";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path="/aboutMe">
            <Me />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/qualifications">
            <Qualifications />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
