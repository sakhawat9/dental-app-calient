/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelopeOpen,
  FaTwitter
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="grid items-center grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8">
            <ul className="top-header__information">
              <li>
                <IoIosCall className="inline" />
                <Link to="tel:088123654988"> +088 123 654 988</Link>
              </li>
              <li>
                <FiMapPin className="inline mr-2" />
                35 West Dental Street, California 1004
              </li>
              <li>
                <FaRegEnvelopeOpen className="inline mr-2" />
                <Link to="#">support@rola.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <ul className="top-header__social-media-icons">
              <li>
                <Link to="#" target="_blank">
                  <i>
                    <FaTwitter />
                  </i>
                </Link>
                <Link to="#" target="_blank">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link to="#" target="_blank">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
                <Link to="#" target="_blank">
                  <i>
                    <FaLinkedinIn />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
