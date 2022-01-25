import React, { useEffect, useState } from "react";
import Service from "../common/Service";
import Pagination from "./Pagination";

const AllService = () => {
  const [serviceData, setServiceData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = serviceData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="section-padding">
      <div className="special-features__title ">
        <div className="special-features__title__content">
          <span className="subtitle"># OUR DENTAL SERVICES</span>
          <h2>
            Enjoy Specialized Care Through Precision, Artistry, And Experience
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          {currentPosts.map((data) => (
            <Service key={data.id} data={data} />
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={serviceData.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllService;
