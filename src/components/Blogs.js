/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Blog from "../common/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
console.log(blogs);
  useEffect(() => {
    fetch("/blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blog-area section-padding ">
      <div className="blog-area__container">
        <div className="blog-area__container__top-wrapper">
          <div className="lg:col-span-5 col-span-12">
            <div className="blog-area__container__top-wrapper__title section-title-warp">
              <span className="subtitle"># UPDATE NEWS AND BLOGS</span>
              <h2>
                Stay Updated With Our<b> Latest News And Blog </b>
                Articles
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 hidden lg:block">
            <div className="flex justify-end">
              <a href="#" className="default-btn">
                View All Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-4 justify-center">
          {blogs.slice(0, 3).map((blog) => (
            <Blog blogData={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
