import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carouselOverrides.css";
import { Carousel } from "react-responsive-carousel";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const slides: Slide[] = [
  {
    src: "/img/whatsapp/lab2_img.jpg",
    alt: "Slide 2",
    caption: "Our Services",
    description:
      "Bridging tech, health, and education through software, hosting, telemedicine, AI, and IT consulting.",
    buttonText: "View Progress",
    buttonLink: "/progress",
  },
  {
    src: "/img/Banner/caurosel-2.jpg",
    alt: "Slide 1",
    caption: "Our Exam Lab",
    description:
      "Certified CBT lab offering secure and standardized testing services with advanced infrastructure.",
    buttonText: "Explore Lab",
    buttonLink: "/courses",
  },
 {
  src: "/img/whatsapp/Aeirc_lobby.jpg", 
  alt: "HR Office",
  caption: "Our Office Space",
  description:
    "A glimpse into our modern office where innovation and collaboration meet.",
  buttonText: "Take a look at our lobby",
  buttonLink: "/about",
},

  {
    src: "/img/whatsapp/lab1_img.jpg",
    alt: "Slide 4",
    caption: "Our Operations",
    description:
      "Driven by ISO, GDPR, and national standards to ensure secure, high-quality, and reliable services.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const HomeBanner: React.FC = () => {
  return (
    <div
      id="home-banner"
      style={{
        width: "100vw",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        swipeable
        emulateTouch
        useKeyboardArrows
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "80vh",
              position: "relative",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                // backgroundColor: "#ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "80vh",
                background: "linear-gradient(#00000027 , rgba(0,0,0,0.35))",
                display: "flex",
                alignItems: "center",
                paddingLeft: "40px",
                boxSizing: "border-box",
                color: "white",
              }}
              className="banner-container"
            >
              <div
                className="banner-padding"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "80vh",
                  backgroundColor: "rgba(71, 71, 71, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0 20px 0 100px",
                  boxSizing: "border-box",
                  color: "white",
                }}
              >
                <div
                  className="text-content"
                  style={{
                    maxWidth: "600px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {slide.caption && <h2>{slide.caption}</h2>}
                  {slide.description && <p>{slide.description}</p>}
                  {/* {slide.buttonText && slide.buttonLink && (
                    <a
                      href={slide.buttonLink}
                      style={{
                        backgroundColor: "#2563eb",
                        padding: "0.7rem 1.5rem",
                        borderRadius: "0.375rem",
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "600",
                        userSelect: "none",
                        fontSize: "1rem",
                        width: "fit-content",
                      }}
                    >
                      {slide.buttonText}
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBanner;
