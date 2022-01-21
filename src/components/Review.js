/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";


const data = [
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_960_720.jpg",
    name: "Habib Sharabon",
    description: "Habib vai is a bad learner",
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
    <div className="p-2 m-3 text-center shadow-lg">
      <div className="inline-flex p-2 align-middle bg-white rounded-full shadow">
        <img
          width="100"
          height="100"
          className="object-cover rounded-full"
          src={item.img}
          alt={item.name}
        />
      </div>
      <h3 className="pt-3 text-2xl">{item.name}</h3>
      <p className="text-sm text-justify">{item.description}</p>
      <ul className="flex mt-3">
        <li>
          <AiOutlineStar className="text-2xl text-yellow-400" />
        </li>
        <li>
          <AiOutlineStar className="text-2xl text-yellow-400" />
        </li>
        <li>
          <AiOutlineStar className="text-2xl text-yellow-400" />
        </li>
        <li>
          <AiOutlineStar className="text-2xl text-yellow-400" />
        </li>
        <li>
          <AiOutlineStar className="text-2xl text-yellow-400" />
        </li>
      </ul>
    </div>
  );
};

export default Review;
