import React from "react";
import { BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const ContactInformaTion = () => {
  return (
    <div className="contact section-padding">
      <div className="contact__title">
        <div className="contact__title__content">
          <span className="subtitle"># OUR CONTACT INFORMATION</span>
          <h2>
            Contact Us Now By
            <b className="font-bold">Phone Number or Email Address</b>
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="grid justify-center grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="contact__info">
              <div className="flex justify-center">
                <div className="contact__info__icon">
                  <GoLocation />
                </div>
              </div>
              <h3>Our Location:</h3>
              <p>35 West Dental Street Nyz California 1004</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="contact__info">
              <div className="flex justify-center">
                <div className="contact__info__icon">
                  <BsEnvelope />
                </div>
              </div>
              <h3>Email Address:</h3>
              <p>
                <a href="mailto:contactinfo@rola.com">contactinfo@rola.com</a>
              </p>
              <p>
                <a href="mailto:support@rola.com">support@rola.com</a>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="contact__info">
              <div className="flex justify-center">
                <div className="contact__info__icon">
                  <BiPhoneCall />
                </div>
              </div>
              <h3>Phone Number:</h3>
              <p>
                <a href="tel:088123654987">+088 123 654 987</a>
              </p>
              <p>
                <a href="tel:088123654612">+088 123 654 612</a>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="contact__info">
              <div className="flex justify-center">
                <div className="contact__info__icon">
                  <BiTimeFive />
                </div>
              </div>
              <h3>Open Hour:</h3>
              <p>09:00 AM to 18:00 PM</p>
              <p>Sunday to Thursday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformaTion;
