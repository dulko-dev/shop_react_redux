import React from "react";
import Nav from "./components/nav/Nav";
import Carusela from "./components/carusela/Carusela";
import { ResetStyle } from "./style/reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./style/global";
import BeforePremier from "./components/boxes/BeforePremier";
import Basket from "./components/basket/Basket";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Carusela />
            <BeforePremier />
          </Route>
          <Route path="/basket" component={Basket} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
