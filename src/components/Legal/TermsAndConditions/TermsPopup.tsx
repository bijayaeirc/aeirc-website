import React, { useState } from "react";

interface TermsPopupProps {
  show: boolean;
  onClose: () => void;
}

const TermsPopup: React.FC<TermsPopupProps> = ({ show, onClose }) => {
  const [agreed, setAgreed] = useState(false);

  if (!show) return null;

  const termsData = [
    {
      id: 1,
      title: "1. Use of Services",
      content: [
        "AEIRC provides digital services including CBT exams, software platforms, telemedicine, AI/robotics education, and IT consulting.",
        "Users must:",
        [
          "Provide accurate information",
          "Refrain from disrupting service operations",
          "Use AEIRC services only for lawful purposes",
        ],
      ],
    },
    {
      id: 2,
      title: "2. Intellectual Property",
      content: [
        "All content, platforms, software, designs, logos, and data are the property of AEIRC or its partners.",
        "Reproduction, copying, or redistribution is prohibited without written consent.",
      ],
    },
    {
      id: 3,
      title: "3. User Accounts",
      content: [
        "You are responsible for maintaining confidentiality of your login credentials.",
        "AEIRC is not liable for unauthorized access resulting from negligence.",
      ],
    },
    {
      id: 4,
      title: "4. Exam & Telemedicine Conduct",
      content: [
        "Misconduct, cheating, or fraudulent activity may lead to disqualification or legal action.",
        "All telemedicine consultations are recorded for safety, with data protected as per our privacy policy.",
      ],
    },
    {
      id: 5,
      title: "5. Limitation of Liability",
      content: [
        "AEIRC will not be liable for:",
        [
          "Any indirect or consequential loss from using our services",
          "Service delays due to technical issues beyond our control",
          "Inaccuracies in third-party content or client-supplied information",
        ],
      ],
    },
    {
      id: 6,
      title: "6. Termination",
      content: [
        "We reserve the right to suspend or terminate user access for:",
        [
          "Violation of terms",
          "Security breaches",
          "Legal or compliance issues",
        ],
      ],
    },
    {
      id: 7,
      title: "7. Governing Law",
      content: [
        "These Terms are governed by the laws of Nepal.",
        "Disputes will be settled under Nepalese jurisdiction.",
      ],
    },
    {
      id: 8,
      title: "8. Changes to Terms",
      content: [
        "AEIRC reserves the right to revise these Terms at any time.",
        "Continued use after updates means you accept the changes.",
      ],
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          maxWidth: "700px",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "1.5rem 2rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Terms & Conditions – AEIRC
        </h1>

        {termsData.map((section) => (
          <div key={section.id} style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
              {section.title}
            </h2>
            {section.content.map((item, idx) =>
              Array.isArray(item) ? (
                <ul
                  key={idx}
                  style={{ paddingLeft: "1.5rem", listStyleType: "disc", color: "#333" }}
                >
                  {item.map((point, i) => (
                    <li key={i} style={{ marginBottom: "0.3rem" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={idx} style={{ marginBottom: "0.5rem", color: "#444" }}>
                  {item}
                </p>
              )
            )}
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.9rem",
              color: "#333",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              style={{ marginRight: "0.5rem" }}
            />
            I agree to the Terms & Conditions
          </label>
          <button
            disabled={!agreed}
            onClick={() => {
              setAgreed(false);
              onClose();
            }}
            style={{
              backgroundColor: agreed ? "#007BFF" : "#ccc",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "5px",
              cursor: agreed ? "pointer" : "not-allowed",
              transition: "background-color 0.3s ease",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsPopup;
