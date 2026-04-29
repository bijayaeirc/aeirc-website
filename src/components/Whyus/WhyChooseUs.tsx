import React, { useState } from "react";
import {
  FaAward,
  FaShieldAlt,
  FaNetworkWired,
  FaRobot,
  FaLaptopCode,
  FaUserShield,
  FaTools,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Feature Data
const aeircFeatures = [
  {
    icon: FaAward,
    title: "Unmatched Experience",
    description:
      "Years of successfully managing Nepal’s largest exams, including those for NHPC, NPC, and British Council, with verified success.",
  },
  {
    icon: FaShieldAlt,
    title: "Scalability & Security",
    description:
      "Handles 100–2,000 candidates daily across 3 soundproof, air-conditioned CBT labs with biometric and network security.",
  },
  {
    icon: FaNetworkWired,
    title: "Advanced Infrastructure",
    description:
      "CBT exam labs, a waiting room, soundproof telemedicine room, and meeting halls — all powered by a strong human resource team.",
  },
  {
    icon: FaRobot,
    title: "Technology-Driven Solutions",
    description:
      "Wearable health tech, custom LMS, AI diagnostics, and robotics education built for scale and real-world impact.",
  },
  {
    icon: FaLaptopCode,
    title: "Dedicated Team",
    description:
      "Multidisciplinary professionals: engineers, IT experts, exam coordinators, developers, AI specialists, and certified invigilators.",
  },
  {
    icon: FaUserShield,
    title: "Compliance & Quality",
    description:
      "ISO 9001:2015-certified, GDPR-ready, and compliant with local and global standards — committed to strict protocols.",
  },
  {
    icon: FaTools,
    title: "Innovation Leadership",
    description:
      "Pioneering AI, robotics education, telemedicine, and diagnostics to solve emerging challenges in education and healthcare.",
  },
];

const WhyChooseUs: React.FC = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);

  const displayedFeatures = showFirstSet
    ? aeircFeatures.slice(0, 4)
    : aeircFeatures.slice(4);

  return (
    <div id="whyus-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Header */}
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-highlight px-3">
              AEIRC
            </h6>
            <h1 className="mb-3">Why Choose Us?</h1>
          </div>

          <div className="row align-items-start mt-4">
            {/* Left Column */}
            <div className="col-12 col-lg-6">
              {/* <p className="text-secondary small mb-2">Why AEIRC?</p> */}
              <h2 className="display-5 fw-bold mb-4 text-secondary">
                The AEIRC <br /> Difference
              </h2>
              <p className="text-muted mb-4">
                AEIRC stands out as a trusted partner due to our proven track
                record, cutting-edge infrastructure, and commitment to proper
                protocols.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a
                  href="/contact"
                  className="text-secondary text-decoration-none fw-medium"
                >
                  Contact Us &rarr;
                </a>
                <a
                  href="/contact"
                  className="text-secondary text-decoration-none fw-medium"
                >
                  Book Free Consultation &rarr;
                </a>
              </div>
            </div>

            {/* Right Column with Animated Features */}
            <div className="col-12 col-lg-6 position-relative mt-4 mt-lg-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={showFirstSet ? "set1" : "set2"}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="row gy-4">
                    {displayedFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className={`col-12 col-sm-6 d-flex ${
                            index >= 2 ? "border-top pt-3" : ""
                          } ${index === 1 ? "pt-sm-0 border-sm-0" : ""}`}
                        >
                          <div className="me-3">
                            <Icon className="text-secondary fs-3" />
                          </div>
                          <div>
                            <h6 className="fw-bold text-secondary">
                              {feature.title}
                            </h6>
                            <p className="small text-muted">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-end mt-4 gap-3">
                {!showFirstSet && (
                  <button
                    className="btn btn-outline-secondary btn-custom"
                    onClick={() => setShowFirstSet(true)}
                  >
                    <FaArrowLeft className="me-1" />
                    Back
                  </button>
                )}
                {showFirstSet && (
                  <button
                    className="btn btn-outline-secondary btn-custom"
                    onClick={() => setShowFirstSet(false)}
                  >
                    Next <FaArrowRight className="ms-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
