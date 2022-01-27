/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsSearch } from "react-icons/bs";

const HeaderBottom = () => {
  return (
    <div className="navbar-area">
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <h1>
              <a className="navbar-brand" href="/">
                Rola
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="main-navbar">
        <div className="container">
          <nav className="flex items-center justify-between main-navbar__navbar navbar-expand-md navbar-light">
            <h1>
              <a className="navbar-brand" href="/">
                Rola
              </a>
            </h1>
            <div className="flex items-center  mean-menu">
              <ul className="flex ml-auto navbar-nav">
                <li className="menu-item  dropdown active nav-item">
                  <a title="Home" href="/home" className="nav-link">
                    Home
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item  active  nav-item">
                      <a title="Home One" href="#" className="dropdown-item">
                        Home One
                      </a>
                    </li>
                    <li className="menu-item  nav-item">
                      <a title="Home Two" href="#" className="dropdown-item">
                        Home Two
                      </a>
                    </li>
                    <li className="menu-item  nav-item">
                      <a title="Home Three" href="#" className="dropdown-item">
                        Home Three
                      </a>
                    </li>
                    <li className="menu-item  nav-item">
                      <a title="Home Four" href="#" className="dropdown-item">
                        Home Four
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Dentist" href="#" className="nav-link">
                    Dentist
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item   nav-item">
                      <a title="Dentist" href="#" className="dropdown-item">
                        Dentist
                      </a>
                    </li>
                    <li className="menu-item menu-item-object-doctor nav-item">
                      <a
                        title="Single Dentist"
                        href="#"
                        className="dropdown-item"
                      >
                        Single Dentist
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Services" href="#" className="nav-link">
                    Services
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <a
                        title="Our Services"
                        href="#"
                        className="dropdown-item"
                      >
                        Our Services
                      </a>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <a
                        title="Single Service"
                        href="#"
                        className="dropdown-item"
                      >
                        Single Service
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Pages" href="#" className="nav-link">
                    Pages
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <a title="About Us" href="#" className="dropdown-item">
                        About Us
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Appointment" href="#" className="dropdown-item">
                        Appointment
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Pricing" href="#" className="dropdown-item">
                        Pricing
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a
                        title="Testimonials"
                        href="#"
                        className="dropdown-item"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="FAQ’s" href="#" className="dropdown-item">
                        FAQ’s
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a
                        title="Privacy Policy"
                        href="#"
                        className="dropdown-item"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a
                        title="Terms of Services"
                        href="#"
                        className="dropdown-item"
                      >
                        Terms of Services
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Coming Soon" href="#" className="dropdown-item">
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Shop" href="#" className="nav-link">
                    Shop
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <a title="Shop" href="#" className="dropdown-item">
                        Shop
                      </a>
                    </li>
                    <li className="menu-item  dropdown nav-item">
                      <a
                        title="Product details"
                        href="#"
                        className="dropdown-item"
                      >
                        Product details
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item menu-item-object-product nav-item">
                          <a
                            title="Simple Product"
                            href="#"
                            className="dropdown-item"
                          >
                            Simple Product
                          </a>
                        </li>
                        <li className="menu-item menu-item-object-product nav-item">
                          <a
                            title="Thumbs Product"
                            href="#"
                            className="dropdown-item"
                          >
                            Thumbs Product
                          </a>
                        </li>
                        <li className="menu-item menu-item-object-product nav-item">
                          <a
                            title="Slider Product"
                            href="#"
                            className="dropdown-item"
                          >
                            Slider Product
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Cart" href="#" className="dropdown-item">
                        Cart
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Checkout" href="#" className="dropdown-item">
                        Checkout
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="My Account" href="#" className="dropdown-item">
                        My Account
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Blog" href="#" className="nav-link">
                    Blog
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item  nav-item">
                      <a title="Blog" href="#" className="dropdown-item">
                        Blog
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Single Blog" href="#" className="dropdown-item">
                        Single Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item nav-item">
                  <a title="Contact Us" href="#" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="flex items-center others-options">
                <div className="option-item">
                  <a className="search-box" href="#">
                    <i>
                      <BsSearch />
                    </i>
                  </a>
                </div>
                <div className="option-item">
                  <a href="#" className="default-btn">
                    Book Appointment
                  </a>
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
                  <a className="search-box" href="#">
                    <i>
                      <BsSearch />
                    </i>
                  </a>
                </div>
                <div className="option-item">
                  <a href="#" className="default-btn">
                    Book Appointment
                  </a>
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
