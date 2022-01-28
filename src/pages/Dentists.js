import React, { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PageBanner from "../common/PageBanner";

const Dentists = () => {
  // const {id} = useParams()
  const [allDentist, setAllDentist] = useState([]);

  useEffect(() => {
    fetch("/doctorData.json")
      .then((res) => res.json())
      .then((data) => setAllDentist(data));
  }, []);

  //   const exactData = allDentist.filter((td) => td.id === id);
  return (
    <div>
      <PageBanner title="Dentist" />
      <div className="special-features__title ">
        <div className="special-features__title__content">
          <span className="subtitle"># OUR EXPERIENCED DENTIST</span>
          <h2>
            Top Dentist For <b>Specialized And Experienced</b> Dentist
          </h2>
        </div>
      </div>
      <div className="experienced-dentist">
        <div className="special-features__title ">
          <div className="special-features__title__content">
            <span className="subtitle"># OUR SPECIAL FEATURES</span>
            <h2>
              Top Dentist For <b>Specialized And Experienced</b> Dentistry
            </h2>
          </div>
        </div>
        <div className="container grid grid-cols-12 gap-4 section-padding">
          {allDentist.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="col-span-12 md:col-span-3">
      <div className="container doctor-card">
        <div className="doctor-image">
          <img src={item.img} alt="" />
        </div>
        <div className="doctor-content">
          <h3>
            <Link to={`/singleDoctor/${item.id}`}>{item.name}</Link>
          </h3>
          <span>{item.expert}</span>
          <div className="social-link">
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
      </div>
    </div>
  );
};

export default Dentists;
