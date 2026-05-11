import React, { useEffect, useState } from "react";
import { fetchTerms, getTermsCache, fallbackTermsSections } from "../../../cache/termsCache";
import type { LegalSection } from "../../../cache/termsCache";

interface TermsPopupProps {
  show: boolean;
  onClose: () => void;
}

const TermsPopup: React.FC<TermsPopupProps> = ({ show, onClose }) => {
  const [agreed, setAgreed] = useState(false);
  const [sections, setSections] = useState<LegalSection[]>(
    getTermsCache() ?? fallbackTermsSections
  );

  useEffect(() => {
    if (!show) return;
    if (getTermsCache()) return;
    fetchTerms().then(setSections);
  }, [show]);

  if (!show) return null;

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
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "1.5rem 2rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Terms & Conditions – AEIRC
        </h1>

        {sections.map((section, index) => (
          <div key={section.id} style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
              {index + 1}. {section.title}
            </h2>
            {section.paragraphs.map((para, i) => (
              <p key={i} style={{ marginBottom: "0.5rem", color: "#444" }}>{para}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc", color: "#333" }}>
                {section.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: "0.3rem" }}>{bullet}</li>
                ))}
              </ul>
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
          <label style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", color: "#333", userSelect: "none" }}>
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
            onClick={() => { setAgreed(false); onClose(); }}
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
