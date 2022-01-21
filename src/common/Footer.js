/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="footer section-padding-t"
      style={{
        backgroundImage:
          "url(https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/footer-bg.jpg )",
      }}
    >
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__wrapper__single-footer lg:col-span-3 md:col-span-6 col-span-6">
            <h3 className="widget_title">Rola</h3>
            <ul className="footer-information">
              <li>
                <span>Location: </span>
                35 West Dental Street
              </li>
              <li>
                <span>Phone:</span>
                <a href="tel:088123654987">+088 123 654 987</a>
              </li>
              <li>
                <span>Email: </span>
                <a href="mailto:info@rola.com">info@rola.com</a>
              </li>
            </ul>
            <div className="share-link flex">
              <a href="#" target="_blank">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank">
                <FaTwitter />
              </a>
              <a href="#" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="#" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer__wrapper__single-footer widget_nav_menu lg:col-span-2 md:col-span-6 col-span-6">
            <h3 className="widget_title">Useful Links</h3>
            <div className="menu-quick-links-container">
              <ul id="menu-quick-links" className="menu">
                <li
                  id="menu-item-659"
                  className="menu-item  menu-item-object-page menu-item-659"
                >
                  <a href="#">About Us</a>
                </li>
                <li
                  id="menu-item-662"
                  className="menu-item  menu-item-object-page menu-item-662"
                >
                  <a href="#">Our Services</a>
                </li>
                <li
                  id="menu-item-677"
                  className="menu-item  menu-item-object-page menu-item-677"
                >
                  <a href="#">Appointment</a>
                </li>
                <li
                  id="menu-item-676"
                  className="menu-item  menu-item-object-page menu-item-676"
                >
                  <a href="#">Privacy Policy</a>
                </li>
                <li
                  id="menu-item-663"
                  className="menu-item  menu-item-object-page menu-item-663"
                >
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__wrapper__single-footer widget_nav_menu lg:col-span-2 md:col-span-6 col-span-6">
            <h3 className="widget_title">Our Services</h3>
            <div className="menu-our-services-container">
              <ul id="menu-our-services" className="menu">
                <li
                  id="menu-item-1116"
                  className="menu-item  menu-item-object-service menu-item-1116"
                >
                  <a href="#">Cosmetic Dentistry</a>
                </li>
                <li
                  id="menu-item-1117"
                  className="menu-item  menu-item-object-service menu-item-1117"
                >
                  <a href="#">General Dentistry</a>
                </li>
                <li
                  id="menu-item-1118"
                  className="menu-item  menu-item-object-service menu-item-1118"
                >
                  <a href="#">Certified Dentist</a>
                </li>
                <li
                  id="menu-item-1119"
                  className="menu-item  menu-item-object-service menu-item-1119"
                >
                  <a href="#">New Technology</a>
                </li>
                <li
                  id="menu-item-1120"
                  className="menu-item  menu-item-object-service menu-item-1120"
                >
                  <a href="#">Accept Insurance</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__wrapper__single-footer widget_nav_menu lg:col-span-2 md:col-span-6 col-span-6">
            <h3 className="widget_title">Support</h3>
            <div className="menu-support-container">
              <ul id="menu-support" className="menu">
                <li
                  id="menu-item-1132"
                  className="menu-item  menu-item-object-page menu-item-1132"
                >
                  <a href="#">Our Dentist</a>
                </li>
                <li
                  id="menu-item-1129"
                  className="menu-item  menu-item-object-page menu-item-1129"
                >
                  <a href="#">Terms of Services</a>
                </li>
                <li
                  id="menu-item-1128"
                  className="menu-item  menu-item-object-page menu-item-1128"
                >
                  <a href="#">Privacy Policy</a>
                </li>
                <li
                  id="menu-item-1131"
                  className="menu-item  menu-item-object-page menu-item-1131"
                >
                  <a href="#">Our Pricing</a>
                </li>
                <li
                  id="menu-item-1133"
                  className="menu-item  menu-item-object-page menu-item-1133"
                >
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__wrapper__single-footer  lg:col-span-3 md:col-span-6 col-span-12">
            <h3 className="widget_title">Newsletter</h3>
            <div className="widget-newsletter">
              <div className="newsletter-content">
                <p>
                  Best solution for your it startup business
                  consecteturadipiscing elit.
                </p>
              </div>
              <form
                className="mailchimp newsletter-form"
                method="post"
                novalidate="true"
              >
                <input
                  type="email"
                  className="input-newsletter memail"
                  placeholder="Enter email"
                  name="EMAIL"
                  required=""
                />
                <button type="submit">
                  <FiSend />
                </button>
                <div
                  className="mchimp-errmessage alert alert-danger"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="mchimp-sucmessage alert alert-primary"
                  style={{ display: "none" }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area__content">
            <p>
              Copyright © 2021 Rola is Proudly Created by
              <a
                href="https://sakhawat.vercel.app"
                target="_blank"
                rel="noopener"
              >
                Shakib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
