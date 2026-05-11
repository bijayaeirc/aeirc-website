import { useEffect, useState } from "react";
import api from "../../../api/client";

interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

const fallbackSections: PolicySection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: ["We collect the following types of personal data:"],
    bullets: [
      "Name, email, phone number, and contact details",
      "User credentials for access to our services",
      "Exam registration and biometric information (face scan, fingerprints)",
      "Health data (vitals like BP, HR, SpO₂ via Digital Care™)",
      "Usage data (IP address, browser type, device info, time spent)",
      "Communication records (emails, messages, feedback forms)",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    paragraphs: ["We use your information to:"],
    bullets: [
      "Deliver CBT exams and verify candidate identity",
      "Provide secure telemedicine and health monitoring services",
      "Improve our software and platforms (LMS, EMR, apps)",
      "Offer training, workshops, and support services",
      "For internal analytics, compliance, and research",
      "Communicate service updates, alerts, or marketing (opt-in)",
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    paragraphs: ["We may share data only under these conditions:"],
    bullets: [
      "With trusted third-party providers under NDA",
      "With government or legal authorities when required by law",
      "With academic or research collaborators (anonymized data only)",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    paragraphs: [
      "Data is retained only for the duration necessary to fulfill the purpose or legal requirement.",
      "Biometric and health data are stored securely and deleted in accordance with compliance timelines.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    paragraphs: ["Under GDPR and Nepalese law, you may:"],
    bullets: [
      "Access, update, or delete your data",
      "Withdraw consent at any time",
      "Request data portability or restrict processing",
      "Lodge a complaint with a data protection authority",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    paragraphs: [
      "Our website may use cookies to enhance user experience. You may disable cookies in your browser, though some features may not function properly.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: ["We maintain strict security protocols, including:"],
    bullets: [
      "Encrypted data transmission",
      "Firewalls and secure servers",
      "Biometric and CCTV access control",
      "ISO-compliant audits and backups",
    ],
  },
  {
    id: "international",
    title: "International Data Transfers",
    paragraphs: [
      "If you access our services from outside Nepal, your data may be transferred internationally, but always under GDPR and local protection standards.",
    ],
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. You will be notified via email or website notice.",
    ],
  },
];

let cachedSections: PolicySection[] | null = null;

const SectionBlock = ({ section, index }: { section: PolicySection; index: number }) => (
  <article id={section.id} className="mb-8 scroll-offset">
    <h2 className="text-xl font-semibold mb-3">
      {index + 1}. {section.title}
    </h2>
    {section.paragraphs.map((para, i) => (
      <p key={i} className="text-gray-700 mb-2">{para}</p>
    ))}
    {section.bullets && section.bullets.length > 0 && (
      <ul className="list-disc list-inside pl-4">
        {section.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    )}
  </article>
);

const PrivacyPolicy = () => {
  const [sections, setSections] = useState<PolicySection[]>(
    cachedSections ?? fallbackSections
  );

  useEffect(() => {
    if (cachedSections) return;
    api
      .get<{ sections: PolicySection[] }>("/privacy-policy/data")
      .then((res) => {
        if (Array.isArray(res.data?.sections) && res.data.sections.length > 0) {
          cachedSections = res.data.sections;
          setSections(res.data.sections);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title text-center text-highlight px-3 mb-4">
            Our Commitment to Privacy
          </h6>
        </div>

        <div className="row py-10 text-gray-800">
          {/* Sidebar */}
          <aside className="col-lg-4 mb-4">
            <div className="privacy-sidebar border-start">
              <ul className="list-unstyled ps-3">
                <h5 className="mb-3 text-muted">On This Page</h5>
                {sections.map(({ id, title }, index) => (
                  <li key={id} className="mb-3">
                    <a href={`#${id}`} className="text-primary text-decoration-none">
                      {index + 1}. {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <section className="privacy-content-container col-lg-8">
            {sections.map((section, index) => (
              <SectionBlock key={section.id} section={section} index={index} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
