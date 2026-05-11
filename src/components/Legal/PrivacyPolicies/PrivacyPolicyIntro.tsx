import { useEffect, useState } from "react";
import api from "../../../api/client";

interface PrivacyIntroData {
  image_url: string;
  heading: string;
  paragraphs: string[];
  lead_text: string;
  features: string[];
}

const fallbackData: PrivacyIntroData = {
  image_url: "img/whatsapp/Reception.jpg",
  heading: "Privacy Policy – AEIRC",
  paragraphs: [
    "AEIRC is committed to protecting the privacy of our clients, users, and visitors. This Privacy Policy explains how we collect, use, store, and protect your personal information in compliance with ISO 9001:2015, GDPR, and the Data Protection Laws of Nepal.",
    "We believe in transparency and integrity when it comes to handling sensitive data. Whether you're registering for exams, using our telemedicine services, or interacting with our platforms, your privacy is respected and protected.",
  ],
  lead_text: "Key data we handle includes:",
  features: [
    "Personal details (name, email, phone, etc.)",
    "User credentials and usage activity",
    "Exam registration and biometric data",
    "Health vitals via Digital Care™",
    "Service usage and communication logs",
  ],
};

let cachedData: PrivacyIntroData | null = null;

const PrivacyPolicyIntro = () => {
  const [data, setData] = useState<PrivacyIntroData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<PrivacyIntroData>("/privacy-policy/intro")
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
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 zoom-container">
                <img
                  className="img-fluid position-absolute w-100 h-100 zoom-image"
                  src={data.image_url}
                  alt="Privacy Policy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ overflowWrap: "break-word", minWidth: 0 }}
            >
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                Legal Notice
              </h6>
              <h1 className="mb-4">{data.heading}</h1>
              <p className="mb-3">{data.lead_text}</p>
              {data.paragraphs.map((para, i) => (
                <p className="mb-4" key={i}>{para}</p>
              ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyIntro;
