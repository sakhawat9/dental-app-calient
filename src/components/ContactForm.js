import React from "react";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="contact__title">
        <div className="contact__title__content">
          <span className="subtitle">MAKE AN APPOINTMENT</span>
          <h2>
            Fill In Your
            <b className="font-bold"> Information & We Will Be In Touch</b> As
            Soon As We Can
          </h2>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="flex gap-4">
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email*" />
          </div>
          <div className="flex gap-4">
            <input type="number" placeholder="Phone*" />
            <input type="text" placeholder="Subject*" />
          </div>
          <textarea
            className="form-control"
            placeholder="Your Message"
            id="comment"
            name="comment"
            cols="45"
            rows="5"
            maxLength="65525"
            required="required"
          ></textarea>
          <div className="option-item">
            <button to="#" className="default-btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
