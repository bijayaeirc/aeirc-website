import { Link } from "react-router-dom";

const sections = [
  {
    id: "information-we-collect",
    title: "Article 1. Information We Collect",
    content: (
      <ul className="list-disc list-inside pl-4">
        <li>Name, email, phone number, and contact details</li>
        <li>User credentials for access to our services</li>
        <li>Exam registration and biometric information (face scan, fingerprints)</li>
        <li>Health data (vitals like BP, HR, SpO₂ via Digital Care™)</li>
        <li>Usage data (IP address, browser type, device info, time spent)</li>
        <li>Communication records (emails, messages, feedback forms)</li>
      </ul>
    ),
  },
  {
    id: "how-we-use",
    title: "Article 2. How We Use Your Information",
    content: (
      <ul className="list-disc list-inside pl-4">
        <li>To deliver CBT exams and verify candidate identity</li>
        <li>To provide secure telemedicine and health monitoring services</li>
        <li>To improve our software and platforms (LMS, EMR, apps)</li>
        <li>To offer training, workshops, and support services</li>
        <li>For internal analytics, compliance, and research</li>
        <li>To communicate service updates, alerts, or marketing (opt-in)</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Article 3. Sharing Your Information",
    content: (
      <>
        <p>We may share data only under these conditions:</p>
        <ul className="list-disc list-inside pl-4">
          <li>With trusted third-party providers under NDA</li>
          <li>With government or legal authorities when required by law</li>
          <li>With academic or research collaborators (anonymized data only)</li>
        </ul>
        <p className="mt-2">We do not sell personal information to third parties.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Article 4. Data Retention",
    content: (
      <p>
        Data is retained only for the duration necessary to fulfill the purpose or legal requirement.
        Biometric and health data are stored securely and deleted in accordance with compliance timelines.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Article 5. Your Rights",
    content: (
      <>
        <p>Under GDPR and Nepalese law, you may:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Access, update, or delete your data</li>
          <li>Withdraw consent at any time</li>
          <li>Request data portability or restrict processing</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, contact:
          <Link
          to="https://mail.google.com/mail/?view=cm&fs=1&to=info@aeirc.com&su=Booking%20Request"
          target="_blank"
          rel="noopener noreferrer"
          className="text text-decoration-none d-flex align-items-center"
          >
          {/* <h5>Email us at</h5> */}
          {/* <i className="bi bi-envelope me-2"></i> */}
          <p>info@aeirc.com</p>
        </Link>
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Article 6. Cookies and Tracking",
    content: (
      <p>
        Our website may use cookies to enhance user experience. You may disable cookies in your browser,
        though some features may not function properly.
      </p>
    ),
  },
  {
    id: "security",
    title: "Article 7. Security",
    content: (
      <>
        <p>We maintain strict security protocols, including:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Encrypted data transmission</li>
          <li>Firewalls and secure servers</li>
          <li>Biometric and CCTV access control</li>
          <li>ISO-compliant audits and backups</li>
        </ul>
      </>
    ),
  },
  {
    id: "international",
    title: "Article 8. International Data Transfers",
    content: (
      <p>
        If you access our services from outside Nepal, your data may be transferred internationally,
        but always under GDPR and local protection standards.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Article 9. Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. You will be notified via email or website notice.
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
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
          <div className="privacy-sidebar border-start ">
            <ul className="list-unstyled ps-3">
            <h5 className="mb-3 text-muted">On This Page</h5>
              {sections.map(({ id, title }) => (
                <li key={id} className="mb-3">
                  <a href={`#${id}`} className="text-primary text-decoration-none">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </aside>

          {/* Content */}
          <section className="privacy-content-container col-lg-8">
            
            {sections.map(({ id, title, content }, index) => (
              <article key={id} id={id} className="mb-8 scroll-offset">
                <h2 className=" text-xl font-semibold mb-3">
                  {index + 1}. {title.replace(/^Article \d+\. /, "")}
                </h2>
                {content}
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
