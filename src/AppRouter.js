import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Header />
       <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
