/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import Slider from "react-slick";

const data = [
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/review-3.jpg",
    name: "Eachann Jhon",
    title: "Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/review-4.jpg",
    name: "Smith Jorge",
    title: "Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/review-1.jpg",
    name: "Sarah Taylor",
    title: "Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/review-2.jpg",
    name: "Aiken Ward",
    title: "Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    title: "Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltLeft className="p-2 text-4xl font-extrabold text-white rounded-full shadow-lg" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltRight className="p-2 text-4xl text-white rounded-full shadow-lg" />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const Review = () => {
  return (
    <>
      <div className="container">
        <div className="grid gap-4 grid-cols-12 items-center">
          <div className="lg:col-span-7 col-span-12">
            <div className="section-title-warp">
              <span className="subtitle"># OUR PATIENTS REVIEW</span>
              <h2>
                Read Real Review From <b>Our Valuable Customer</b> On Our
                Services
              </h2>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="flex justify-end">
              <a
                href="https://themes.hibootstrap.com/rola/testimonials/"
                className="default-btn"
              >
                View All Review
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto carousel section-padding">
          <Slider {...carouselProperties}>
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div className="single-review-item">
      <ul className="single-review-item__ratting">
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
        <li>
          <AiOutlineStar />
        </li>
      </ul>
      <p>{item.description}</p>
      <div className="single-review-item__info">
        <img src={item.img} alt="image" />
        <h3>Eachann Jhon</h3>
        <span>Founder</span>
      </div>
      <div className="single-review-item__quote-icon">
        <ul>
          <li>
            <IoMdQuote />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
