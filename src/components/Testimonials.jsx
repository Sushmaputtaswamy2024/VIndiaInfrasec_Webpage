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
    img: "//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg",
    name: "Heena Kouser",
    desc: "It's a great experience we had with them , they used best quality meterial, I highly recommend vindia",
    rating: 5,
  },
  {
    img: "https://i.postimg.cc/ydBjdm20/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.jpg",
    name: "Kalyan Peeka",
    desc: "Excellence in every brick and beam A dream home made possible!",
    rating: 5,
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg",
    name: "Prajith Kumar Pacha",
    desc: "Actually first time in my life we got the work done by builder on time.Positive Responsiveness, Punctuality, Quality, Professionalism Services Home renovations",
    rating: 5,
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
