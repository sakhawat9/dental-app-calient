import React from "react";

const PageBanner = ({ title }) => {
  return (
    <div class="page-banner">
      <div class="container">
        <div class="page-banner__content text-center">
          <h2>{title}</h2>
          <ul class="pages-list">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
      <div class="page-banner-shape-1">
        <img
          src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-1.png "
          alt="Shape1"
        />
      </div>
      <div class="page-banner-shape-2">
        <img
          src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-2.png "
          alt="Shape2"
        />
      </div>
    </div>
  );
};

export default PageBanner;
