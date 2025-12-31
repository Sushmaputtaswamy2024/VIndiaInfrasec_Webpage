import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Testimonials.css";

// ======================================================
// SEO-Friendly Testimonials Data
// ======================================================
const feedbacks = [
  {
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Saswat Mishra",
    desc: "The service was quick and well coordinated from the initial discussion till completion. The team responded promptly to queries and maintained good quality throughout the work. Overall, it was a smooth and professional experience.",
    rating: 4.6,
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Ambedkar Vardhanapu",
    desc: "VIndia Infrasec provided reasonably priced services with clear explanations at every stage. The staff were professional in their approach and the work was completed as discussed. I am satisfied with the overall execution.",
    rating: 4.5,
  },
  {
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Vinod Kumar Reddy",
    desc: "The construction work was handled efficiently with good planning and supervision. Quality materials were used and the project was delivered on time. The team maintained transparency and coordination throughout.",
    rating: 4.7,
  },
  {
    img: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Shivani",
    desc: "The interior work was done neatly with proper attention to details. The team followed the agreed timelines and communicated clearly during execution. Overall, the experience was positive and hassle free.",
    rating: 4.6,
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Sinoy John",
    desc: "The team was responsive and handled the project professionally. Coordination between design and execution was good, and the work progressed smoothly without delays. Satisfied with the quality of service.",
    rating: 4.6,
  },
  {
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Jouhar K. V",
    desc: "The project was completed on time with reasonable pricing and proper execution. Design support was helpful and the staff were cooperative throughout the process. Overall, a reliable service provider.",
    rating: 4.4,
  },
  {
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Afzal Shaikh",
    desc: "The work quality was good and the team maintained clear communication during execution. Queries were addressed quickly and pricing was transparent. A professional and dependable experience overall.",
    rating: 4.7,
  },
  {
    img: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Prajesh",
    desc: "The project was managed well and completed within the discussed budget and timeline. The staff were supportive and ensured proper supervision at each stage. Happy with the final outcome.",
    rating: 4.5,
  },
  {
    img: "https://randomuser.me/api/portraits/men/83.jpg",
    name: "Sajish Sekharan",
    desc: "Very professional service with good quality materials and skilled workmanship. The team maintained timelines and ensured smooth handover of the project. Overall, a very satisfying experience.",
    rating: 4.8,
  },
];


const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = (activeIndex - 1 + feedbacks.length) % feedbacks.length;
  const nextIndex = (activeIndex + 1) % feedbacks.length;

  return (
    <section
      className="customer-feedback"
      aria-labelledby="testimonials-title"
      role="region"
    >
      {/* Hidden SEO text */}
      <p className="sr-only">
        Customer reviews and testimonials for VIndia Infrasec, showcasing
        client satisfaction across construction, interiors, and structural design.
      </p>

      <div className="container text-center">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8">
            <h2 id="testimonials-title" className="section-title">
              What Clients Say
            </h2>
          </div>
        </div>

        {/* ================================================
            TESTIMONIAL SLIDER
        ================================================= */}
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="feedback-slider"
              ref={swiperRef}
              aria-label="Customer testimonials slider"
            >
              {feedbacks.map((item, i) => (
                <SwiperSlide key={i} role="group" aria-label={`Review from ${item.name}`}>
                  <div className="feedback-slider-item">
                    <img
                      src={item.img}
                      className="center-block img-circle"
                      alt={`Photo of ${item.name}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <h3 className="customer-name">{item.name}</h3>
                    <p className="customer-feedback-text">{item.desc}</p>

                    <span
                      className="light-bg customer-rating"
                      aria-label={`Rating: ${item.rating} out of 5`}
                    >
                      {item.rating}
                      <i className="fa fa-star" />
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ================================================
                THUMB NAVIGATION (PREV / NEXT)
            ================================================= */}
            <div className="feedback-slider-thumb hidden-xs" aria-hidden="true">
              <div
                className="thumb-prev"
                onClick={() =>
                  swiperRef.current.swiper.slideToLoop(prevIndex)
                }
              >
                <span>
                  <img
                    src={feedbacks[prevIndex].img}
                    alt=""
                    loading="lazy"
                  />
                </span>
                <span className="light-bg customer-rating">
                  {feedbacks[prevIndex].rating}
                  <i className="fa fa-star" />
                </span>
              </div>

              <div
                className="thumb-next"
                onClick={() =>
                  swiperRef.current.swiper.slideToLoop(nextIndex)
                }
              >
                <span>
                  <img
                    src={feedbacks[nextIndex].img}
                    alt=""
                    loading="lazy"
                  />
                </span>
                <span className="light-bg customer-rating">
                  {feedbacks[nextIndex].rating}
                  <i className="fa fa-star" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          SCHEMA MARKUP (Boosts Google ranking)
      ================================================= */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: feedbacks.map((f, i) => ({
            "@type": "Review",
            author: f.name,
            reviewBody: f.desc,
            reviewRating: {
              "@type": "Rating",
              ratingValue: f.rating,
              bestRating: "5",
            },
            position: i + 1,
          })),
        })}
      </script>
    </section>
  );
};

export default Testimonials;
