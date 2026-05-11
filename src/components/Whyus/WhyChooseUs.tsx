import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/client";

interface CtaLink {
  text: string;
  href: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsData {
  section_heading: string;
  subtitle: string;
  description: string;
  cta_links: CtaLink[];
  features: Feature[];
}

const FEATURES_PER_PAGE = 4;

const fallbackData: WhyChooseUsData = {
  section_heading: "Why Choose Us?",
  subtitle: "The AEIRC Difference",
  description:
    "AEIRC stands out as a trusted partner due to our proven track record, cutting-edge infrastructure, and commitment to proper protocols.",
  cta_links: [
    { text: "Contact Us →", href: "/contact" },
    { text: "Book Free Consultation →", href: "/contact" },
  ],
  features: [
    {
      icon: "fa fa-award",
      title: "Unmatched Experience",
      description:
        "Years of successfully managing Nepal's largest exams, including those for NHPC, NPC, and British Council, with verified success.",
    },
    {
      icon: "fa fa-shield-alt",
      title: "Scalability & Security",
      description:
        "Handles 100–2,000 candidates daily across 3 soundproof, air-conditioned CBT labs with biometric and network security.",
    },
    {
      icon: "fa fa-network-wired",
      title: "Advanced Infrastructure",
      description:
        "CBT exam labs, a waiting room, soundproof telemedicine room, and meeting halls — all powered by a strong human resource team.",
    },
    {
      icon: "fa fa-robot",
      title: "Technology-Driven Solutions",
      description:
        "Wearable health tech, custom LMS, AI diagnostics, and robotics education built for scale and real-world impact.",
    },
    {
      icon: "fa fa-laptop-code",
      title: "Dedicated Team",
      description:
        "Multidisciplinary professionals: engineers, IT experts, exam coordinators, developers, AI specialists, and certified invigilators.",
    },
    {
      icon: "fa fa-user-shield",
      title: "Compliance & Quality",
      description:
        "ISO 9001:2015-certified, GDPR-ready, and compliant with local and global standards — committed to strict protocols.",
    },
    {
      icon: "fa fa-tools",
      title: "Innovation Leadership",
      description:
        "Pioneering AI, robotics education, telemedicine, and diagnostics to solve emerging challenges in education and healthcare.",
    },
  ],
};

let cachedData: WhyChooseUsData | null = null;

const WhyChooseUs: React.FC = () => {
  const [data, setData] = useState<WhyChooseUsData>(cachedData ?? fallbackData);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<WhyChooseUsData>("/whyus/data")
      .then((res) => {
        if (res.data?.features?.length > 0) {
          cachedData = res.data;
          setData(res.data);
          setCurrentPage(0);
        }
      })
      .catch(() => {});
  }, []);

  const totalPages = Math.ceil(data.features.length / FEATURES_PER_PAGE);
  const displayedFeatures = data.features.slice(
    currentPage * FEATURES_PER_PAGE,
    (currentPage + 1) * FEATURES_PER_PAGE
  );

  return (
    <div id="whyus-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-highlight px-3">
              AEIRC
            </h6>
            <h1 className="mb-3">{data.section_heading}</h1>
          </div>

          <div className="row align-items-start mt-4">
            {/* Left Column */}
            <div className="col-12 col-lg-6">
              <h2 className="display-5 fw-bold mb-4 text-secondary">
                {data.subtitle}
              </h2>
              <p className="text-muted mb-4">{data.description}</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                {data.cta_links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-secondary text-decoration-none fw-medium"
                  >
                    {link.text} <span>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column — Animated Feature Cards */}
            <div className="col-12 col-lg-6 position-relative mt-4 mt-lg-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="row gy-4">
                    {displayedFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className={`col-12 col-sm-6 d-flex ${
                          index >= 2 ? "border-top pt-3" : ""
                        }`}
                      >
                        <div className="me-3 flex-shrink-0">
                          <i className={`${feature.icon} text-secondary fs-3`} />
                        </div>
                        <div>
                          <h6 className="fw-bold text-secondary">
                            {feature.title}
                          </h6>
                          <p className="small text-muted">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {totalPages > 1 && (
                <div className="d-flex justify-content-end mt-4 gap-3">
                  {currentPage > 0 && (
                    <button
                      className="btn btn-outline-secondary btn-custom"
                      onClick={() => setCurrentPage((p) => p - 1)}
                    >
                      <FaArrowLeft className="me-1" /> Back
                    </button>
                  )}
                  {currentPage < totalPages - 1 && (
                    <button
                      className="btn btn-outline-secondary btn-custom"
                      onClick={() => setCurrentPage((p) => p + 1)}
                    >
                      Next <FaArrowRight className="ms-1" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
