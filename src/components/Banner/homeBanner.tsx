import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carouselOverrides.css";
import { Carousel } from "react-responsive-carousel";
import api from "../../api/client";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const BannerSkeleton: React.FC = () => (
  <div className="banner-skeleton">
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "600px", width: "100%" }}>
      <div className="banner-skeleton-block" style={{ height: "40px", width: "55%" }} />
      <div className="banner-skeleton-block" style={{ height: "20px", width: "90%" }} />
      <div className="banner-skeleton-block" style={{ height: "20px", width: "75%" }} />
      <div className="banner-skeleton-block" style={{ height: "44px", width: "160px", marginTop: "8px" }} />
    </div>
  </div>
);

const HomeBanner: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Slide[]>("/slider/slides")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setSlides(res.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div id="home-banner" style={{ width: "100vw", height: "80vh", overflow: "hidden" }}>
        <BannerSkeleton />
      </div>
    );
  }

  if (slides.length === 0) {
    return null;
  }

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
