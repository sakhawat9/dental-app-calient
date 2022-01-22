/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Blog = ({ blogData }) => {
  console.log(blogData);
  const { img, title, subtitle, slug } = blogData;
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12">
      <div className="single-blog-card">
        <div className="single-blog-card__image">
          <a href={`/singlePage/${slug}`}>
            <img src={img} alt={title} />
          </a>
        </div>
        <div className="single-blog-card__content">
          <ul className="entry-meta d-flex justify-content-between align-items-center">
            <li>
              <a href="#">{subtitle}</a>
            </li>
            <li>
              <i className="bx bx-calendar"></i> July 31, 2021
            </li>
          </ul>
          <h3>
            <a href="#">{title}</a>
          </h3>
          <a href="#" className="blog-btn">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
