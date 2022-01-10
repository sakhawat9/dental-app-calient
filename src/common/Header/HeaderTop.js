/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="grid items-center grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <ul className="top-header__information">
              <li>
                <i className="bx bxs-phone"></i>
                <a href="tel:088123654988"> +088 123 654 988</a>
              </li>
              <li>
                <i className="bx bxs-map"></i>
                35 West Dental Street, California 1004
              </li>
              <li>
                <i className="bx bx-envelope-open"></i>
                <a href="mailto:support@rola.com">support@rola.com</a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <ul className="top-header__social-media-icons">
              <li>
                <a target="_blank" href="">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a target="_blank" href="">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a target="_blank" href="">
                  <i>
                    <FaInstagram />
                  </i>
                </a>
                <a target="_blank" href="">
                  <i>
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
