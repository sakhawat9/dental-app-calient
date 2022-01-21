import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header/Header";
import Home from "./pages/home/Home";


const AppRouter = () => {
  return (
    <Router>
      <Header />
       <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
