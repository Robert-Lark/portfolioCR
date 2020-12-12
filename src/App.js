import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
