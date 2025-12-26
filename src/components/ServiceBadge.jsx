import React from "react";
import "./ServiceBadge.css";

const ServiceBadge = () => {
  return (
    <div className="badge-container">
      {/* OUTER RING */}
      <div className="rotating-ring">
        <svg className="curved-text" viewBox="0 0 300 300">
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
            />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="50%">
              VIEW OUR SERVICE
            </textPath>
          </text>
        </svg>
      </div>

      {/* CENTER */}
      <div className="center-circle">
  <i className="bi bi-arrow-up-right arrow-icon"></i>
</div>

    </div>
  );
};

export default ServiceBadge;
