// Testimonials.jsx
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "./Testimonials.css";

const feedbacks = [
  {
    img: '//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg',
    name: 'Lisa Redfern',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
    rating: 5,
  },
  {
    img: 'https://i.postimg.cc/ydBjdm20/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.jpg',
    name: 'Cassi',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
    rating: 4,
  },
  {
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg',
    name: 'Md Nahidul',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
    rating: 5,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = (activeIndex - 1 + feedbacks.length) % feedbacks.length;
  const nextIndex = (activeIndex + 1) % feedbacks.length;

  return (
    <div className="customer-feedback">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8">
            <h2 className="section-title">What Clients Say</h2>
          </div>
        </div>
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
            >
              {feedbacks.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="feedback-slider-item">
                    <img
                      src={item.img}
                      className="center-block img-circle"
                      alt="Customer Feedback"
                    />
                    <h3 className="customer-name">{item.name}</h3>
                    <p>{item.desc}</p>
                    <span
                      className="light-bg customer-rating"
                      data-rating={item.rating}
                    >
                      {item.rating}
                      <i className="fa fa-star" />
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="feedback-slider-thumb hidden-xs">
              <div
                className="thumb-prev"
                onClick={() =>
                  swiperRef.current.swiper.slideToLoop(prevIndex)
                }
              >
                <span>
                  <img
                    src={feedbacks[prevIndex].img}
                    alt="Customer Feedback"
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
                    alt="Customer Feedback"
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
    </div>
  );
};

export default Testimonials;
