/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SinglePageDetails = () => {
  return (
    <div className="container section-padding-t">
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <div className="blog-details">
            <div className="article-image">
              <img
                src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/08/blog5.jpg"
                alt="Hygiene for All Age to Make Smile Brighter"
              />
            </div>
            <div className="blog-details-content">
              <div className="entry-meta-info flex justify-between items-center">
                <span>
                  <a href="#">Hygiene</a>
                </span>
                <ul>
                  <li>
                    BY:
                    <a href="#">rola</a>
                  </li>
                  <li>July 31, 2021</li>
                  <li>No Comments</li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis.
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
                  <div className="flex justify-between items-center">
                    <a href="#">Dental</a>
                    <a href="#">(2)</a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <a href="#">Hygiene</a>
                    <a href="#">(1)</a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <a href="#">Implants</a>
                    <a href="#">(1)</a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <a href="#">Technology</a>
                    <a href="#">(2)</a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <a href="#">Hygiene</a>
                    <a href="#">(1)</a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <a href="#">Implants</a>
                    <a href="#">(1)</a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <a href="#">Technology</a>
                    <a href="#">(2)</a>
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
