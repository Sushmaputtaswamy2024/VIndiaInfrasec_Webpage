import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Testimonials.css";

// ======================================================
// TESTIMONIAL DATA
// Reviews based on real client feedback
// Some content lightly edited for clarity
// ======================================================
const feedbacks = [
  {
    img: "/Testimonials/SaswatMishra.webp",
    name: "Saswat Mishra",
    desc: "Had an amazing experience with VIndia Infrasec. Sajay and his team were reliable, punctual, and paid attention to every detail. If you’re looking for a hassle-free home-building process, they are a great choice.",
    rating: 5,
  },
  {
    img: "/Testimonials/Afzal.webp",
    name: "Afzal Shaikh",
    desc: "Good quality work with clear communication throughout the project. Queries were addressed quickly and pricing was transparent. Overall, a professional and satisfactory experience.",
    rating: 4.7,
  },
  {
    img: "/Testimonials/Ambedkar.webp",
    name: "Ambedkar Vardhanapu",
    desc: "Reasonably priced services with clear explanations at every stage. The team was professional and the work was completed as discussed. Happy with the overall execution.",
    rating: 4.5,
  },
  {
    img: "/Testimonials/DeepakShenoy.webp",
    name: "Deepak Shenoy",
    desc: "Had a great experience with VIndia Infrasec. They are professional, stick to timelines, and delivered high-quality work within my budget. Overall, very satisfied with the service.",
    rating: 5,
  },
  {
    img: "/Testimonials/Varshagupta.webp",
    name: "Varsha Gupta",
    desc: "The project was handled end-to-end with clarity and professionalism. Design was thoughtful and aligned with our requirements. Workmanship quality stood out with precise detailing and a refined finish.",
    rating: 4.6,
  },
  {
    img: "/Testimonials/Subhrasommajumdar.webp",
    name: "Subhrasom Majumdar",
    desc: "The project followed a structured execution process integrating design and interiors. Planning clarity and functional detailing were evident throughout. The final outcome was balanced and professionally finished.",
    rating: 5,
  },
  {
    img: "/Testimonials/Prajith.webp",
    name: "Prajith",
    desc: "This is the first time in my life a builder completed the work on time. The team was very responsive and professional. Quality of work was good and the experience was stress-free.",
    rating: 5,
  },
  {
    img: "/Testimonials/Rineesh.webp",
    name: "Rineesh",
    desc: "The interior design and finishing quality are impressive. Spaces are thoughtfully planned with a good balance of aesthetics and functionality. The workmanship reflects a premium standard.",
    rating: 5,
  },
  {
    img: "/Testimonials/Pavan.webp",
    name: "Pavan JH",
    desc: "Architectural planning and interior execution were handled professionally from start to finish. The design was well thought out and the interior finishes were of high quality. Attention to detail and coordination were consistently maintained. Overall, a smooth and satisfying experience.",
    rating: 5,
  },
];

const GOOGLE_OVERALL_RATING = 4.8;

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex =
    (activeIndex - 1 + feedbacks.length) % feedbacks.length;
  const nextIndex = (activeIndex + 1) % feedbacks.length;

  return (
    <section
      className="customer-feedback"
      aria-labelledby="testimonials-title"
      role="region"
    >
      {/* SEO helper text */}
      <p className="sr-only">
        Customer reviews and testimonials for VIndia Infrasec covering
        construction, interiors, and structural design services.
      </p>

      <div className="container text-center">
        <h2 id="testimonials-title" className="section-title">
          What Clients Say
        </h2>

        {/* Overall Google Rating */}
        <div className="google-rating-badge">
          <div className="google-stars">★★★★☆</div>
          <div className="google-rating-text">
            <strong>{GOOGLE_OVERALL_RATING} / 5</strong> based on Google Reviews
          </div>
        </div>

        {/* Disclaimer */}
        <p className="testimonial-disclaimer">
          Reviews shown are based on client feedback. Some content may be lightly
          edited for clarity. Images are for representative purposes only.
        </p>

        {/* ===================== SLIDER ===================== */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          className="feedback-slider"
          ref={swiperRef}
        >
          {feedbacks.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="feedback-slider-item">
                <img
                  src={item.img}
                  alt={`Client review from ${item.name}`}
                  loading="lazy"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "/Testimonials/Afzal.webp")
                  }
                  className="testimonial-avatar"
                />

                <h3 className="customer-name">{item.name}</h3>
                <p className="customer-feedback-text">{item.desc}</p>

                <span className="light-bg customer-rating">
                  {item.rating}
                  <i className="fa fa-star" />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===================== THUMB NAV ===================== */}
        <div className="feedback-slider-thumb hidden-xs">
          <div
            className="thumb-prev"
            onClick={() =>
              swiperRef.current.swiper.slideToLoop(prevIndex)
            }
          >
            <img src={feedbacks[prevIndex].img} alt="" />
          </div>

          <div
            className="thumb-next"
            onClick={() =>
              swiperRef.current.swiper.slideToLoop(nextIndex)
            }
          >
            <img src={feedbacks[nextIndex].img} alt="" />
          </div>
        </div>
      </div>

      {/* ===================== SCHEMA (SEO) ===================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VIndia Infrasec",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_OVERALL_RATING,
            reviewCount: feedbacks.length,
          },
          review: feedbacks.map((f) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: f.name,
            },
            reviewBody: f.desc,
            reviewRating: {
              "@type": "Rating",
              ratingValue: f.rating,
              bestRating: "5",
            },
          })),
        })}
      </script>
    </section>
  );
};

export default Testimonials;
