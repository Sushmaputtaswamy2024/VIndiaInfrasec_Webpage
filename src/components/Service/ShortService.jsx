
import React from 'react';
import "./style.css"
import ViewOurServiceBadge from '../ServiceBadge';
import ServiceBadge from '../ServiceBadge';

const ShortService = ({ img, heading, subcontent1, subcontent2, subcontent3, discription }) => (
  <section className="service-card">
    {/* <div className="service-badge"> */}
        {/* <ViewOurServiceBadge/> */}
  {/* </div> */ }
  <ServiceBadge/>
    <img src={img} alt={heading} />
    <div className="content">
      <h2>{heading}</h2>
      <div className="tags">
        <span className="pill">{subcontent1}</span>
        <span className="pill">{subcontent2}</span>
        <span className="pill">{subcontent3}</span>
      </div>
      <p>{discription}</p>
    </div>
  </section>
);


export default ShortService;
