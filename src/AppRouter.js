import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header/Header";
import Home from "./pages/home/Home";
import SinglePage from "./pages/SinglePage";
import Testimonial from "./pages/Testimonial";
import SingleService from "./pages/SingleService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
        <Route path="/privacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/serviceDetails/:slug">
          <SingleService />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
