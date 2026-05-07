import { useEffect, useState } from "react";
import api from "../../api/client";

interface ServiceDescriptionData {
  image_url: string;
  heading: string;
  paragraphs: string[];
  lead_text: string;
  features: string[];
}

const fallbackData: ServiceDescriptionData = {
  image_url: "img/whatsapp/Aeirc_lobby.jpg",
  heading: "Overview of our services",
  paragraphs: [
    "Basically, AEIRC was established to fill the gaps between education, healthcare, and digital transformation by taking full advantage of the distinct resources of Nepal to meet the international standards. We strictly follow the standardized protocols in terms of compliance with ISO 9001:2015, GDPR, and the data protection laws of Nepal to offer secure, reliable, and high-quality services across all operations.",
  ],
  lead_text: "AEIRC provides the following services:",
  features: [
    "Computer-Based Test (CBT) Services",
    "Server Infrastructure & Hosting",
    "Software Application and Development",
    "IT Consulting & Infrastructure Services",
    "Telemedicine & Health Technology",
    "AI & Robotics Education",
    "Research, Innovation & Capacity Building",
    "Commitment to Standardized Protocols",
  ],
};

let cachedData: ServiceDescriptionData | null = null;

const ServiceDescription = () => {
  const [data, setData] = useState<ServiceDescriptionData>(
    cachedData ?? fallbackData
  );

  useEffect(() => {
    if (cachedData) return;
    api
      .get<ServiceDescriptionData>("/services/description")
      .then((res) => {
        if (res.data) {
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
                Services
              </h6>
              <h1 className="mb-4">{data.heading}</h1>
              {data.paragraphs?.map((para, i) => (
                <p className="mb-4" key={i}>{para}</p>
              ))}
              <p>{data.lead_text}</p>

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
                  alt="Services overview"
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

export default ServiceDescription;
