import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header/Header";
import AllBlogs from "./pages/AllBlogs";
import AllServices from "./pages/AllServices";
import Contact from "./pages/Contact";
import Dentists from "./pages/Dentists";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Registry from "./pages/Registry";
import SingleDoctor from "./pages/SingleDoctor";
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
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/allBlog">
          <AllBlogs />
        </Route>
        <Route path="/dentists">
          <Dentists />
        </Route>
        <Route path="/singleDoctor/:id">
          <SingleDoctor />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
