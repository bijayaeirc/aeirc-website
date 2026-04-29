import React, { useState } from "react";

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How secure are AEIRC’s CBT exam labs?",
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
  ];

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
            <h1 className="mt-2">Frequently Asked Questions</h1>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left - Video */}
            <div className="col-md-4">
              <div className="h-100 position-relative overflow-hidden rounded">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster=""
                  className="w-100 h-100 object-fit-cover rounded faq-img-height"
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).pause()}
                  onMouseLeave={(e) => (e.target as HTMLVideoElement).play()}
                >
                  <source src="/videos/mushroom.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right - Accordion FAQ */}
            <div className="col-md-8">
              <div className="bg-white p-4 h-100 shadow rounded">
                <h2 className="text-secondary mb-3">Ask us anything</h2>
                <p className="text-muted mb-4">
                  Learn more about our examination protocols, standardized
                  services, and commitment to data security.
                </p>

                {activeIndex === null ? (
                  <div className="accordion" id="faqAccordion">
                    {faqItems.map((item, index) => (
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
                      {faqItems[activeIndex].question}
                    </h5>
                    <p className="text-muted">{faqItems[activeIndex].answer}</p>
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
