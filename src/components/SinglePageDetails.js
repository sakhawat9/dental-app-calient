/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const SinglePageDetails = ({data}) => {
  return (
    <div className="container section-padding-t">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <div className="blog-details">
            <div className="article-image">
              <img
                src={data[0]?.img}
                alt="Hygiene for All Age to Make Smile Brighter"
              />
            </div>
            <div className="blog-details-content">
              <div className="flex items-center justify-between entry-meta-info">
                <span>
                  <Link to="#">Hygiene</Link>
                </span>
                <ul>
                  <li>
                    BY:
                    <Link to="#">rola</Link>
                  </li>
                  <li>July 31, 2021</li>
                  <li>No Comments</li>
                </ul>
              </div>
              <p className="text-justify">
              {data[0]?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div id="secondary" className="title blog-sidebar right-pos">
            <div id="search-2" className="widget widget_search">
              <form
                role="search"
                method="get"
                action="https://themes.hibootstrap.com/rola/"
                className="search-form"
              >
                <label>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Search..."
                    value=""
                    name="s"
                    required=""
                  />
                </label>
                <button type="submit" className="search-submit">
                  <i className="bx bx-search-alt"></i>
                </button>
              </form>
            </div>
            <div id="rola_cats-3" className="widget widget_rola_cats">
              <h3 className="widget-title">Category</h3>
              <ul className="cus_widget_categories">
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Dental</Link>
                    <Link to="#">(2)</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Hygiene</Link>
                    <Link to="#">(1)</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Implants</Link>
                    <Link to="#">(1)</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Technology</Link>
                    <Link to="#">(2)</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Hygiene</Link>
                    <Link to="#">(1)</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Implants</Link>
                    <Link to="#">(1)</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link to="#">Technology</Link>
                    <Link to="#">(2)</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageDetails;
