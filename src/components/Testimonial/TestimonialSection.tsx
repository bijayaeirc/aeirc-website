import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  imgSrc: string;
  name: string;
  profession: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    imgSrc: "/img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sitTempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    imgSrc: "/img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    imgSrc: "/img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    imgSrc: "/img/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

const TestimonialSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!</h1>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div className="px-3" key={index}>
              <div className="testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={item.imgSrc}
                  alt={item.name}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">{item.name}</h5>
                <p>{item.profession}</p>
                <div
                  className="testimonial-text bg-light text-center p-4"
                  style={{
                    height: "150px",
                    overflowY: "auto",
                  }}
                >
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
