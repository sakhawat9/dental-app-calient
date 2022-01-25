import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header/Header";
import AllServices from "./pages/AllServices";
import Home from "./pages/home/Home";
import SinglePage from "./pages/SinglePage";
import Testimonial from "./pages/Testimonial";
import SingleService from "./pages/SingleService";

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
        <Route path="/singlePage/:slug">
          git checlout
          <SinglePage />
        </Route>
        <Route path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="/serviceDetails/:slug">
          <SingleService />
        </Route>
        <Route path="/allService">
          <AllServices />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
