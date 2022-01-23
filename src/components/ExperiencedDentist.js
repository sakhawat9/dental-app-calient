/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { AiOutlineStar } from "react-icons/ai";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
// import { IoMdQuote } from "react-icons/io";
import Slider from "react-slick";

const doctorsData = [
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2022/01/dentist-3.jpg",
    name: "Dr. Sarah Tailor",
    expert: "Prosthodontics Dentist",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2022/01/dentist-1.jpg",
    name: "Dr. Rose Tailor",
    expert: "Prosthodontics Dentist",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2022/01/dentist-2.jpg",
    name: "Dr. Melborn Doe",
    expert: "Prosthodontics Dentist",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-3.jpg",
    name: "Dr. Jhon Melborn",
    expert: "Prosthodontics Dentist",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-4.jpg",
    name: "Dr. Ena Dicrosa",
    expert: "Aesthetic Dentistry",
  },
  {
    img: "https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-6.jpg",
    name: "Dr. Addison Smith",
    expert: "Gastroenterologists",
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
      breakpoint: 512,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const ExperiencedDentist = () => {
  return (
    <div className="experienced-dentist">
      <div className="special-features__title ">
        <div className="special-features__title__content">
          <span className="subtitle"># OUR SPECIAL FEATURES</span>
          <h2>
            Top Dentist For <b>Specialized And Experienced</b> Dentistry
          </h2>
          <p></p>
        </div>
      </div>
      <div className="container mx-auto carousel section-padding">
        <Slider {...carouselProperties}>
          {doctorsData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    // <div className="single-review-item">
    //   <div className="single-review-item__info">
    //     <img src={item.img} alt="image" />
    //     <h3>Eachann Jhon</h3>
    //     <span>Founder</span>
    //   </div>
    //   <div className="single-review-item__quote-icon">
    //     <ul>
    //       <li>
    //         <IoMdQuote />
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="container">
      <img src={item.img} alt="" />
    </div>
  );
};

export default ExperiencedDentist;
