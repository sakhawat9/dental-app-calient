/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blogData }) => {
  const { img, title, subtitle, slug } = blogData;
  return (
    <div className="col-span-12 lg:col-span-4 md:col-span-6">
      <div className="single-blog-card">
        <div className="single-blog-card__image">
          <Link to={`/singlePage/${slug}`}>
            <img src={img} alt={title} />
          </Link>
        </div>
        <div className="single-blog-card__content">
          <ul className="entry-meta d-flex justify-content-between align-items-center">
            <li>
              <Link to="#">{subtitle}</Link>
            </li>
            <li>
              <i className="bx bx-calendar"></i> July 31, 2021
            </li>
          </ul>
          <h3>
            <Link to={`/singlePage/${slug}`}>{title}</Link>
          </h3>
          <Link to={`/singlePage/${slug}`} className="blog-btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
