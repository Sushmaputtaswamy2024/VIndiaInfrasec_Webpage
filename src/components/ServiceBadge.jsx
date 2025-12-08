import React from "react";
import "./ServiceBadge.css";

const ServiceBadge = () => {
  return (
    <div
      className="badge-container"
      role="img"
      aria-label="Service badge: View our services"
    >
      {/* ROTATING OUTER RING */}
      <div className="rotating-ring" aria-hidden="true">
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

      {/* CENTER BUTTON (semantic, accessible) */}
      <button
        className="center-circle"
        aria-label="Explore service details"
        onClick={() => {
          // optional click handler (SEO-agnostic)
        }}
      >
        <span className="arrow" aria-hidden="true">➜</span>
      </button>
    </div>
  );
};

export default ServiceBadge;
