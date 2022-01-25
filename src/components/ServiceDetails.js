/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const ServiceDetails = ({ data }) => {
  return (
    <div className="service-details">
      <div className="container">
        <div className="grid gap-4 grid-cols-12">
          <div className="lg:col-span-4 col-span-12">
            <div className="service-details__sidebar">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="hidden" name="post_type" value="service" />
                  <input
                    type="text"
                    className="search-field"
                    placeholder="Search..."
                    name="s"
                  />
                  <button>
                    <BiSearchAlt />
                  </button>
                </form>
              </div>
              <div className="widget widget_popular_service">
                <h3 className="service-details__sidebar__title">
                  Popular Services
                </h3>
                <ul className="popular-service-list">
                  <li>
                    <div className="flex justify-between items-center">
                      <a href="#">Whitening</a>
                      <a href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <a href="#">Cosmetic Dentistry</a>
                      <a href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <a href="#">Fillings</a>
                      <a href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <a href="#">Root Canal</a>
                      <a href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <a href="#">Dental Implants</a>
                      <a href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <a href="#">Quality Patients Care</a>
                      <a href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_working_time">
                <h3 className="widget_working_time__title">Working Time</h3>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <span>Monday - Thursday</span>
                      <span>08:00 - 18:00</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <span>Friday</span>
                      <span>07:00 - 22:00</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <span>Saturday</span>
                      <span>08:00 - 18:00</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_quote_info">
                <div className="">
                  <div className="info-item">
                    <div className="info-item__rating">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      arcu a dignissim suscipit non ac eget tellus in nisl
                      mauris nec
                    </p>
                  </div>
                  <div className="info">
                    <img
                      src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/review-5.jpg"
                      alt="Image"
                    />
                    <h3>kathrym Cooper</h3>
                    <span>Obstetrics &amp; Gynaecology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="services-details-desc">
              <div className="services-details-desc__image">
                <img src={data[0]?.bannerImg} alt="Teeth Cleaning" />
                <div className="services-details-desc__image__icon">
                  <img src={data[0]?.img} alt="Teeth Cleaning" />
                </div>
              </div>
              <div className="services-details-content">
                <h3>{data[0]?.name}</h3>
                <p>
                {data[0]?.description}
                </p>
              </div>
              <div className="services-details-video">
                <h3 className="my-6">Watch the Procedure Video</h3>
                <iframe
                  src="https://www.youtube.com/embed/ODfy2YIKS1M"
                  frameborder="0"
                  width="100%"
                  height="360"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="services-details-content">
                <h4>Why Cosmetic Dentistry is Important</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consequat loem odio placerat luctus neque a. Odio pretium
                  faucibus tellus sed nunc sollicitudin dictumst quam. Eget
                  vestibulum nulla ac ut suspendisse id nunc. Non sollicitudin
                  porta viverra leo tellus a at. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
