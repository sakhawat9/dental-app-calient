import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header/Header";
import AllServices from "./pages/AllServices";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Registry from "./pages/Registry";
import SinglePage from "./pages/SinglePage";
import SingleService from "./pages/SingleService";
import Testimonial from "./pages/Testimonial";

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
        <Route path="/allService">
          <AllServices />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registry">
          <Registry />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
