import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../common/Comments";
import PageBanner from "../common/PageBanner";
import SinglePageDetails from "../components/SinglePageDetails";

const SinglePage = () => {
  const { slug } = useParams();
  console.log(slug);
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    fetch("/blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  const exactData = blogDetails.filter((td) => td.slug === slug);
  console.log("exactData", exactData);
  return (
    <div>
      <PageBanner title={exactData[0]?.title} />
      <SinglePageDetails />
      <Comments />
    </div>
  );
};

export default SinglePage;
