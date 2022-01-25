/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../common/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blog-area section-padding ">
      <div className="blog-area__container">
        <div className="blog-area__container__top-wrapper">
          <div className="col-span-12 lg:col-span-5">
            <div className="blog-area__container__top-wrapper__title section-title-warp">
              <span className="subtitle"># UPDATE NEWS AND BLOGS</span>
              <h2>
                Stay Updated With Our<b> Latest News And Blog </b>
                Articles
              </h2>
            </div>
          </div>
          <div className="hidden lg:col-span-7 lg:block">
            <div className="flex justify-end">
              <Link to="#" className="default-btn">
                View All Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid justify-center grid-cols-12 gap-4">
          {blogs.slice(0, 3).map((blog) => (
            <Blog blogData={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
