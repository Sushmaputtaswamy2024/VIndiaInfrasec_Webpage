import React from "react";
import "./ServiceBadge.css";

const ServiceBadge = () => {
  return (
    <div className="badge-container">

      {/* ROTATING OUTER RING */}
      <div className="rotating-ring">

        {/* CURVED TEXT AROUND RING */}
        <svg className="curved-text" viewBox="0 0 300 300">
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
            />
          </defs>

          <text fill="white" fontSize="20" letterSpacing="4">
            <textPath xlinkHref="#circlePath" startOffset="50%">
              VIEW OUR SERVICE
            </textPath>
          </text>
        </svg>

      </div>

      {/* STATIC CENTER CIRCLE WITH ARROW */}
      <div className="center-circle">
        <span className="arrow">➜</span>
      </div>
    </div>
  );
};

export default ServiceBadge;
