import React from "react";

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
    </div>
  );
};

export default ExperiencedDentist;
