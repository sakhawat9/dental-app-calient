import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceBanner from "../common/ServiceBanner";
import ServiceDetails from "../components/ServiceDetails";

const SingleService = () => {
  const { slug } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const exactData = services.filter((td) => td.slug === slug);

  return (
    <div>
      <ServiceBanner title={exactData[0]?.name} />
      <ServiceDetails data={exactData} />
    </div>
  );
};

export default SingleService;
