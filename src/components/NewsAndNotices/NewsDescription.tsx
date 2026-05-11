import { useEffect, useState } from "react";
import api from "../../api/client";

interface SectionIntro {
  image_url: string;
  heading: string;
  paragraphs: string[];
}

const fallbackData: SectionIntro = {
  image_url: "img/whatsapp/l1.jpg",
  heading: "Stay Informed with the Latest News",
  paragraphs: [
    "Welcome to our News section — your trusted source for the latest updates, announcements, and highlights from AEIRC. Whether it's the launch of a new digital examination system, academic collaborations, upcoming events, or major achievements, you'll find all the essential information right here.",
    "We believe in keeping our community informed and engaged. This page is regularly updated to ensure you're always aware of what's happening at AEIRC and in the broader educational and technological landscape.",
    "Browse through our latest news articles to stay connected with our mission and the steps we are taking to drive innovation and excellence in education across Nepal.",
  ],
};

let cachedData: SectionIntro | null = null;

const NewsDescription = () => {
  const [data, setData] = useState<SectionIntro>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<SectionIntro>("/news/intro")
      .then((res) => {
        if (res.data?.heading) {
          cachedData = res.data;
          setData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ overflowWrap: "break-word", minWidth: 0 }}
            >
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                News & Updates
              </h6>
              <h1 className="mb-4">{data.heading}</h1>
              {data.paragraphs.map((para, i) => (
                <p className="mb-4" key={i}>{para}</p>
              ))}
            </div>

            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 zoom-container">
                <img
                  className="img-fluid position-absolute w-100 h-100 zoom-image"
                  src={data.image_url}
                  alt="AEIRC News Section"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDescription;
