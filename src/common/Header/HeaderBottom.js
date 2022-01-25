/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="navbar-area">
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <h1>
              <Link className="navbar-brand" to="/">
                Rola
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="main-navbar">
        <div className="container">
          <nav className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              <Link className="navbar-brand" to="/">
                Rola
              </Link>
            </h1>
            <div className="flex items-center mean-menu">
              <ul className="flex ml-auto navbar-nav">
                <li className="menu-item dropdown active nav-item">
                  <Link title="Home" to="/home" className="nav-link">
                    Home
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item active nav-item">
                      <Link title="Home One" to="#" className="dropdown-item">
                        Home One
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="Home Two" to="#" className="dropdown-item">
                        Home Two
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="Home Three" to="#" className="dropdown-item">
                        Home Three
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="Home Four" to="#" className="dropdown-item">
                        Home Four
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown nav-item">
                  <Link title="Dentist" to="#" className="nav-link">
                    Dentist
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <Link title="Dentist" to="#" className="dropdown-item">
                        Dentist
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-doctor nav-item">
                      <Link
                        title="Single Dentist"
                        to="#"
                        className="dropdown-item"
                      >
                        Single Dentist
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown nav-item">
                  <Link title="Services" to="#" className="nav-link">
                    Services
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <Link
                        title="Our Services"
                        to="allService"
                        className="dropdown-item"
                      >
                        Our Services
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <Link
                        title="Single Service"
                        to="#"
                        className="dropdown-item"
                      >
                        Single Service
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown nav-item">
                  <Link title="Pages" to="#" className="nav-link">
                    Pages
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <Link title="About Us" to="#" className="dropdown-item">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link
                        title="Appointment"
                        to="#"
                        className="dropdown-item"
                      >
                        Appointment
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="Pricing" to="#" className="dropdown-item">
                        Pricing
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link
                        title="Testimonials"
                        to="testimonial"
                        className="dropdown-item"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="FAQ’s" to="#" className="dropdown-item">
                        FAQ’s
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link
                        title="Privacy Policy"
                        to="/privacyPolicy"
                        className="dropdown-item"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link
                        title="Terms of Services"
                        to="#"
                        className="dropdown-item"
                      >
                        Terms of Services
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link
                        title="Coming Soon"
                        to="#"
                        className="dropdown-item"
                      >
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown nav-item">
                  <Link title="Shop" to="#" className="nav-link">
                    Shop
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <Link title="Shop" to="#" className="dropdown-item">
                        Shop
                      </Link>
                    </li>
                    <li className="menu-item dropdown nav-item">
                      <Link
                        title="Product details"
                        to="#"
                        className="dropdown-item"
                      >
                        Product details
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item menu-item-object-product nav-item">
                          <Link
                            title="Simple Product"
                            to="#"
                            className="dropdown-item"
                          >
                            Simple Product
                          </Link>
                        </li>
                        <li className="menu-item menu-item-object-product nav-item">
                          <Link
                            title="Thumbs Product"
                            to="#"
                            className="dropdown-item"
                          >
                            Thumbs Product
                          </Link>
                        </li>
                        <li className="menu-item menu-item-object-product nav-item">
                          <Link
                            title="Slider Product"
                            to="#"
                            className="dropdown-item"
                          >
                            Slider Product
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="Cart" to="#" className="dropdown-item">
                        Cart
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="Checkout" to="#" className="dropdown-item">
                        Checkout
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link title="My Account" to="/login" className="dropdown-item">
                        My Account
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown nav-item">
                  <Link title="Blog" to="#" className="nav-link">
                    Blog
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <Link title="Blog" to="#" className="dropdown-item">
                        Blog
                      </Link>
                    </li>
                    <li className="menu-item nav-item">
                      <Link
                        title="Single Blog"
                        to="#"
                        className="dropdown-item"
                      >
                        Single Blog
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item nav-item">
                  <Link title="Contact Us" to="#" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="flex items-center others-options">
                <div className="option-item">
                  <Link className="search-box" to="#">
                    <i>
                      <BsSearch />
                    </i>
                  </Link>
                </div>
                <div className="option-item">
                  <Link to="#" className="default-btn">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="others-option-for-responsive">
        <div className="container">
          <div className="dot-menu">
            <div className="inner">
              <div className="circle circle-one"></div>
              <div className="circle circle-two"></div>
              <div className="circle circle-three"></div>
            </div>
          </div>
          <div className="container">
            <div className="option-inner">
              <div className="flex items-center others-options">
                <div className="option-item">
                  <Link className="search-box" to="#">
                    <i>
                      <BsSearch />
                    </i>
                  </Link>
                </div>
                <div className="option-item">
                  <Link to="#" className="default-btn">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
