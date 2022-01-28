/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllBlog = ({ blog }) => {
  const { img, title, description, slug } = blog;
  return (
    <div className="single-blog-post">
      <div className="entry-thumbnail">
        <Link to={`/singlePage/${slug}`} className="d-block">
          <img src={img} alt={title} />
        </Link>
        <div className="tag">July 31, 2021</div>
      </div>
      <div className="post-content">
        <h3 className="title">
          <Link to={`/singlePage/${slug}`}>
            World Best Dentist Meetup in Workshop
          </Link>
        </h3>
        <p>{description}</p>
        <Link to={`/singlePage/${slug}`} className="default-btn">
          Read More
        </Link>
        <ul className="flex gap-6 pt-5 mt-6 border-t border-t-gray-200">
          <li className="flex items-center gap-2">
            <AiOutlineUser />
            <span>
              By
              <a href="#">rola</a>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <BiComment />
            No Comments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllBlog;
