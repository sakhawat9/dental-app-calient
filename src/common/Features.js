import React from "react";
import employee from "../assets/images/employee.png";

const Features = () => {
  return (
    <div className="features section-padding-b">
      <div className="features__container">
        <div className="features__wrapper">
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card ">
              <div className="feature-title">
                <div className="">
                  <img src={employee} alt="" className="w-8 h-8" />
                </div>
                <h3 className="">
                  <a href="https://themes.hibootstrap.com/rola/service-post/certified-dentist/">
                    Certified Dentist{" "}
                  </a>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <a
                href="https://themes.hibootstrap.com/rola/service-post/certified-dentist/"
                className="features-btn"
              >
                Read More{" "}
              </a>
            </div>
          </div>
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card bg-E86548">
              <div className="feature-title">
                <img src={employee} alt="" className="w-8 h-8" />
                <h3>
                  <a href="https://themes.hibootstrap.com/rola/service-post/new-technology/">
                    New Technology
                  </a>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <a
                href="https://themes.hibootstrap.com/rola/service-post/new-technology/"
                className="features-btn"
              >
                Read More{" "}
              </a>
            </div>
          </div>
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card bg-456483">
              <div className="feature-title">
                <img src={employee} alt="" className="w-8 h-8" />
                <h3>
                  <a href="https://themes.hibootstrap.com/rola/service-post/accept-insurance/">
                    Accept Insurance{" "}
                  </a>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <a
                href="https://themes.hibootstrap.com/rola/service-post/accept-insurance/"
                className="features-btn"
              >
                Read More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
