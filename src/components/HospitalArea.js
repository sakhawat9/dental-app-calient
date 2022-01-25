/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dentist02 from "../assets/images/dental02.png";
import dentist01 from "../assets/images/dentist01.png";
const HospitalArea = () => {
  return (
    <div className="hospital-area section-padding">
      <div className="container">
        <div className="grid items-center grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <div className="hospital-area__content">
              <span className="text-white border-white subtitle bg-java-500">
                CARE FOR EVERY PATIENT
              </span>
              <h3>
                We Are A <b>Award-Winning And Certified</b> Hospital
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Coectetur tibulum orci ullamcorper elit ullamcorper. Fusce
                posuere vitae egestas equalin tellus. Dictumst venenatis sapien
                massa sed eget risus. Massa scelesque orurna tempor interdum.
              </p>
              <div className="hospital-area__content__btn">
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="hospital-area__right-content">
              <div className="flex items-center gap-4 hospital-area__single-card">
                <div>
                  <img src={dentist01} className="w-20 h-20" alt="" />
                </div>
                <div>
                  <h3>
                    <a href="#">Quality Patients Care</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 hospital-area__single-card">
                <div>
                  <img src={dentist02} className="w-20 h-20" alt="" />
                </div>
                <div>
                  <h3>
                    <a href="#">Experience Dentist</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalArea;
