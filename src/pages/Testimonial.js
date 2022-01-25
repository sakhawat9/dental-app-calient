import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviewdata.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="testimonial">
      <div className="special-features__title ">
        <div className="special-features__title__content">
          <span className="subtitle"># OUR SPECIAL FEATURES</span>
          <h2>
            Real Review From Our <b>Real Customer</b>{" "}
          </h2>
        </div>
      </div>
      <div className="testimonial__wrapper">
        {reviews.map((review) => (
          <div className="testimonial__wrapper__single-card">
            <div className="testimonial__wrapper__single-card__content">
              <p>{review.description}</p>
              <div className="testimonial__wrapper__single-card__content__info single-review-item__info">
                <img src={review.img} alt="" />
                <h3>{review.name}</h3>
                <span>{review.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
