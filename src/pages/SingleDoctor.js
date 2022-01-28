import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ServiceBanner from "../common/ServiceBanner";
import ExperiencedDentist from "../components/ExperiencedDentist";

const SingleDoctor = () => {
  const { id } = useParams();
  const [allDentist, setAllDentist] = useState([]);

  useEffect(() => {
    fetch("/doctorData.json")
      .then((res) => res.json())
      .then((data) => setAllDentist(data));
  }, []);

  const exactData = allDentist.filter((td) => td.id === id);
  return (
    <div className="single-doctor">
      <ServiceBanner title={exactData[0]?.name} />
      <div className="container section-padding">
        <div className="grid grid-cols-12 gap-6">
          <div className="single-doctor__image">
            <img src={exactData[0]?.img} alt={exactData[0]?.name} />
            <div className="flex justify-center mt-6 social-link">
              <div className="flex share-link">
                <Link to="https://www.facebook.com" target="_blank">
                  <FaFacebookF />
                </Link>
                <Link to="https://www.linkedin.com" target="_blank">
                  <FaTwitter />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <FaLinkedinIn />
                </Link>
                <Link to="https://www.instagram.com" target="_blank">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="single-doctor__content">
            <h2 className="mb-4 single-doctor__title">Introduction</h2>
            <h3 className="single-doctor__title">{exactData[0]?.name}</h3>
            <p className="mb-4 ">{exactData[0]?.expert}</p>

            <p>{exactData[0]?.description}</p>
            <div className="skills-content">
              <h3 className="text-lg">Skill</h3>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 md:col-span-6">
                  <ul className="skills-list">
                    <li>
                      <AiOutlineCheck />
                      Safety And Fall Prevention
                    </li>
                    <li>
                      <AiOutlineCheck />
                      Dental Implants
                    </li>
                    <li>
                      <AiOutlineCheck />
                      Dental Demi Text
                    </li>
                  </ul>
                </div>
                <div className="col-span-6 gap-4 md:col-span-6">
                  <ul className="skills-list">
                    <li>
                      <AiOutlineCheck />
                      Filling Content
                    </li>
                    <li>
                      <AiOutlineCheck />
                      Root Canal Demi Text
                    </li>
                    <li>
                      <AiOutlineCheck />
                      Orthodontics Prob
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-doctor__contact-form" >
              <h2>Book An Appointment</h2>
              <form>
                <div className="flex gap-4">
                  <input type="text" name="" placeholder="Your Name*" />
                  <input type="number" name="" placeholder="Your Phone*" />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name=""
                    placeholder="Type of Service Required*"
                  />
                  <input type="text" name="" placeholder="Date" />
                </div>
                <button>Get Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ExperiencedDentist />
    </div>
  );
};

export default SingleDoctor;
