import React, { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    id: "one",
    title: "Unmatched Experience",
    content:
      "With decades of collective experience, we have successfully managed some of Nepal’s largest and most high-stakes examinations. Our portfolio includes comprehensive administration for institutions like NHPC, NPC, and the British Council. Our proven track record and client trust underscore our ability to deliver seamless, error-free exam solutions, time and again.",
  },
  {
    id: "two",
    title: "Scalability & Security",
    content:
      "Our infrastructure is built to scale. We are equipped to handle anywhere from 100 to 2,000 candidates daily across three technologically advanced, soundproof, and air-conditioned CBT labs. Security is paramount—our biometric authentication, real-time surveillance, and network isolation protocols ensure a secure and cheat-proof environment.",
  },
  {
    id: "three",
    title: "Advanced Infrastructure",
    content:
      "We offer a state-of-the-art examination ecosystem featuring three modern CBT labs, a comfortable and organized waiting room, a fully soundproof telemedicine suite, and two well-equipped meeting halls. This is supported by a dynamic human resource team that ensures smooth operations and unmatched logistical support.",
  },
  {
    id: "four",
    title: "Technology-Driven Solutions",
    content:
      "We harness cutting-edge technologies to deliver impactful solutions. Our offerings range from wearable health devices and custom-built LMS platforms to AI-powered diagnostics and advanced robotics education programs. These solutions are designed to scale efficiently while solving real-world problems with measurable results.",
  },
  {
    id: "five",
    title: "Dedicated Team",
    content:
      "Our strength lies in our people. Our team consists of highly trained professionals including engineers, IT specialists, certified invigilators, exam coordinators, software developers, and AI experts. This diverse expertise allows us to tackle complex challenges and deliver excellence at every stage of implementation.",
  },
  {
    id: "six",
    title: "Compliance & Quality",
    content:
      "We are committed to quality and regulatory excellence. As an ISO 9001:2015-certified and GDPR-ready organization, we operate under strict compliance with both national and international standards. Every protocol is followed rigorously to maintain the highest levels of quality assurance and data integrity.",
  },
  {
    id: "seven",
    title: "Innovation Leadership",
    content:
      "Innovation is at the heart of what we do. From spearheading initiatives in AI-driven education and diagnostics to deploying robotics and telemedicine in under-resourced areas, we are shaping the future. Our leadership in innovation ensures we stay ahead of trends while making a real-world impact.",
  },
];

const WhyUs: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("one");

  return (
    <div className="container py-5">
      <div className="py-5 whyus-section">
        <div className="section-container">
          {/* <div className="img-container">
          <img src="/img/AEIRC_Reception.jpg" alt="" />
        </div> */}
          <div className="text-container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-highlight px-3">
                WHY US?
              </h6>
              <h1 className="mb-5 text-dark">Why Choose AEIRC</h1>
            </div>

            <div className="accordion" id="accordionExample">
              {accordionData.map((item) => {
                const collapseId = `collapse${item.id}`;
                const headingId = `heading${item.id}`;
                const isActive = activeId === item.id;

                return (
                  <div
                    className={`accordion-item ${
                      isActive ? "bg-whyus-blue" : ""
                    }`}
                    key={item.id}
                  >
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${
                          !isActive ? "collapsed" : ""
                        }`}
                        type="button"
                        onClick={() => setActiveId(isActive ? "" : item.id)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isActive}
                        aria-controls={collapseId}
                      >
                        <strong>{item.title}</strong>
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        isActive ? "show" : ""
                      }`}
                      aria-labelledby={headingId}
                      data-bs-parent="#003d3dordionExample"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
