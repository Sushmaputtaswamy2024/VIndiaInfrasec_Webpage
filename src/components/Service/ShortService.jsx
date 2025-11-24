import React from "react";
import ServiceBadge from "../ServiceBadge";

const ShortService = ({
  img,
  heading,
  description,
  subcontent1,
  subcontent2,
  subcontent3,
}) => {
  return (
    <>
      <ServiceBadge />

      <img src={img} alt={heading} />

      <div className="content">
        <h2>{heading}</h2>
        <p>{description}</p>

        <div className="tags">
          {subcontent1 && <span className="pill">{subcontent1}</span>}
          {subcontent2 && <span className="pill">{subcontent2}</span>}
          {subcontent3 && <span className="pill">{subcontent3}</span>}
        </div>
      </div>
    </>
  );
};

export default ShortService;
