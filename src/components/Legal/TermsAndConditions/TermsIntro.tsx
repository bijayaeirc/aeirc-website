import { useEffect, useState } from "react";
import api from "../../../api/client";

interface TermsIntroData {
  image_url: string;
  heading: string;
  paragraphs: string[];
  lead_text: string;
  features: string[];
}

const fallbackData: TermsIntroData = {
  image_url: "img/whatsapp/Reception.jpg",
  heading: "Terms & Conditions – AEIRC",
  paragraphs: [
    "By using AEIRC's services, you're agreeing to follow our Terms of Use. These Terms and Conditions explain how you can access and use our platforms, digital services, and facilities.",
    "Whether registering for exams, engaging with telehealth services, or using any of our technological platforms, your agreement ensures mutual understanding, safety, and proper service delivery.",
  ],
  lead_text: "Key points covered in our terms include:",
  features: [
    "User responsibilities and conduct",
    "Service availability and limitations",
    "Exam rules and cancellation policy",
    "Intellectual property usage",
    "Dispute resolution and governing law",
  ],
};

let cachedData: TermsIntroData | null = null;

const TermsIntro = () => {
  const [data, setData] = useState<TermsIntroData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<TermsIntroData>("/terms/intro")
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
                Legal Notice
              </h6>
              <h1 className="mb-4">{data.heading}</h1>
              {data.paragraphs.map((para, i) => (
                <p className="mb-4" key={i}>{para}</p>
              ))}
              <p className="mb-3">{data.lead_text}</p>
              <div className="row gy-2 gx-4 mb-4">
                {data.features.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-highlight me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
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
                  alt="Terms and Conditions"
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

export default TermsIntro;
