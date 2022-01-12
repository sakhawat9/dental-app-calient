import React from "react";

const HospitalArea = () => {
  return (
    <div className="hospital-area ptb-100">
      <div className="container">
        <div className="grid items-center grid-cols-12 gap-4">
          <div className="lg:col-span-6 md:col-span-12">
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
                <a
                  href="https://themes.hibootstrap.com/rola/our-services/"
                  className="default-btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-12">
            <div className="hospital-area__right-content">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6 md:col-span-6">
                  <div className="hospital-area__single-card">
                    <div className="icon">
                      <i className="flaticon-dental"></i>
                    </div>
                    <h3>
                      <a href="https://themes.hibootstrap.com/rola/service-post/quality-patients-care/">
                        Quality Patients Care
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do eiusmod tempor incididunt ut
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 md:col-span-6">
                  <div className="single-hospital-card">
                    <div className="icon">
                      <i className="flaticon-dentist"></i>
                    </div>
                    <h3>
                      <a href="https://themes.hibootstrap.com/rola/service-post/experience-dentist/">
                        Experience Dentist{" "}
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do eiusmod tempor incididunt ut
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid justify-center grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-4 md:col-span-4 sm:col-span-4">
                  <div className="single-hospital-box">
                    <div className="circlechart" data-percentage="70">
                      <svg
                        className="circle-chart"
                        viewBox="0 0 33.83098862 33.83098862"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle className="circle-chart__background"></circle>
                        <circle
                          className="circle-chart__circle success-stroke"
                          stroke-dasharray="70,100"
                        ></circle>
                        <g className="circle-chart__info">
                          <text className="circle-chart__percent">70%</text>
                          <text className="circle-chart__subline">
                            70% 70% 70% 70% 70% 70% 70% 70% 70% 70% 70% 70% 70%
                            70%
                          </text>
                        </g>
                      </svg>
                    </div>
                    <span>Dental Prevention</span>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 md:col-span-4 sm:col-span-4">
                  <div className="single-hospital-box">
                    <div className="circlechart" data-percentage="80">
                      <svg
                        className="circle-chart"
                        viewBox="0 0 33.83098862 33.83098862"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle className="circle-chart__background"></circle>
                        <circle
                          className="circle-chart__circle success-stroke"
                          stroke-dasharray="80,100"
                        ></circle>
                        <g className="circle-chart__info">
                          <text className="circle-chart__percent">80%</text>
                          <text
                            className="circle-chart__subline"
                            x="16.91549431"
                            y="22"
                          >
                            80% 80% 80% 80% 80% 80% 80% 80% 80% 80% 80% 80% 80%
                            80%
                          </text>
                        </g>
                      </svg>
                    </div>
                    <span>Shiny Smiles</span>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 md:col-span-4 sm:col-span-4">
                  <div className="single-hospital-box">
                    <div className="circlechart" data-percentage="50">
                      <svg
                        className="circle-chart"
                        viewBox="0 0 33.83098862 33.83098862"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle className="circle-chart__background"></circle>
                        <circle
                          className="circle-chart__circle success-stroke"
                          stroke-dasharray="50,100"
                        ></circle>
                        <g className="circle-chart__info">
                          <text className="circle-chart__percent">50%</text>
                          <text className="circle-chart__subline">
                            50% 50% 50% 50% 50% 50% 50% 50% 50% 50% 50% 50% 50%
                            50%
                          </text>
                        </g>
                      </svg>
                    </div>
                    <span>All Age Visitors</span>
                  </div>
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
