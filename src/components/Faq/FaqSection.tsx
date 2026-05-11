import React, { useEffect, useState } from "react";
import api from "../../api/client";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqData {
  section_heading: string;
  section_subtitle: string;
  description: string;
  media_url: string;
  media_type: "video" | "image";
  items: FaqItem[];
}

const fallbackData: FaqData = {
  section_heading: "Frequently Asked Questions",
  section_subtitle: "Ask us anything",
  description:
    "Learn more about our examination protocols, standardized services, and commitment to data security.",
  media_url: "/videos/mushroom.mp4",
  media_type: "video",
  items: [
    {
      question: "How secure are AEIRC's CBT exam labs?",
      answer:
        "AEIRC's CBT exam labs are equipped with biometric verification, facial recognition, full HD CCTV surveillance, and soundproof air-conditioned environments, ensuring complete candidate authenticity and exam integrity.",
    },
    {
      question: "What is AEIRC's approach to exam fairness?",
      answer:
        "We strictly adhere to standardized protocols, including ISO 9001:2015 and GDPR compliance, ensuring fairness, transparency, and equal opportunity for all candidates during computer-based testing.",
    },
    {
      question: "Can AEIRC support large-scale examination events?",
      answer:
        "Yes, AEIRC can accommodate over 2,000 candidates per day across three soundproof, air-conditioned CBT labs, making it ideal for national-level exams and high-volume assessments.",
    },
    {
      question: "What kind of support does AEIRC offer during exams?",
      answer:
        "Our professional team of exam coordinators, certified invigilators, and technical support staff ensures a seamless and supportive examination experience for both organizers and candidates.",
    },
    {
      question: "Is candidate data protected at AEIRC?",
      answer:
        "Absolutely. All data is encrypted and stored securely on GDPR-compliant servers hosted within Nepal. AEIRC follows strict data protection laws and operational protocols to maintain candidate confidentiality.",
    },
  ],
};

let cachedData: FaqData | null = null;

const FaqSection: React.FC = () => {
  const [data, setData] = useState<FaqData>(cachedData ?? fallbackData);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<FaqData>("/faq/data")
      .then((res) => {
        if (res.data?.items?.length > 0) {
          cachedData = res.data;
          setData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title text-highlight d-inline-block px-3">
              Q&A
            </h6>
            <h1 className="mt-2">{data.section_heading}</h1>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left - Video or Image */}
            <div className="col-md-4">
              <div className="h-100 position-relative overflow-hidden rounded">
                {data.media_type === "video" ? (
                  /\.(mp4|webm|ogg)/i.test(data.media_url) ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      src={data.media_url}
                      className="w-100 rounded faq-img-height"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      src={data.media_url}
                      className="w-100 rounded faq-img-height"
                      style={{ border: "none", height: "100%" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="FAQ Video"
                    />
                  )
                ) : (
                  <img
                    src={data.media_url}
                    alt="FAQ"
                    className="w-100 h-100 object-fit-cover rounded faq-img-height"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>

            {/* Right - Accordion FAQ */}
            <div className="col-md-8">
              <div className="bg-white p-4 h-100 shadow rounded">
                <h2 className="text-secondary mb-3">{data.section_subtitle}</h2>
                <p className="text-muted mb-4">{data.description}</p>

                {activeIndex === null ? (
                  <div className="accordion" id="faqAccordion">
                    {data.items.map((item, index) => (
                      <div
                        key={index}
                        className="accordion-item"
                        onClick={() => toggleItem(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed text-secondary"
                            type="button"
                          >
                            {item.question}
                          </button>
                        </h2>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-whyus-blue p-4 rounded">
                    <div
                      className="text-secondary mb-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveIndex(null)}
                    >
                      ← Back to questions
                    </div>
                    <h5 className="mb-2 text-secondary">
                      {data.items[activeIndex].question}
                    </h5>
                    <p className="text-muted">{data.items[activeIndex].answer}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
