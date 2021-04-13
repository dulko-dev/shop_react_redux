import React from "react";
import Nav from "./components/nav/Nav";
import {ResetStyle} from './style/reset';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <ResetStyle />
    <Router>
      <Nav />
    </Router>
  </>
  );
}

export default App;
