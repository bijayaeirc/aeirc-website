import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/client";

interface SocialLink {
  icon: string;
  url: string;
}

interface FooterData {
  company_name: string;
  address: string;
  phone: string[];
  email: string;
  social_links: SocialLink[];
}

const fallbackData: FooterData = {
  company_name: "Advance Education & Innovative Research Centre Pvt. Ltd.",
  address: "Babarmal, Kathmandu",
  phone: ["9851046500"],
  email: "info@aeirc.com",
  social_links: [
    { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1Fg5keFa1e/" },
    { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/company/aeirc-tech/?originalSubdomain=np" },
  ],
};

const toAbsoluteUrl = (url: string) =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;

let cachedData: FooterData | null = null;

const FooterSection: React.FC<{ onTermsClick: () => void }> = ({ onTermsClick }) => {
  const [data, setData] = useState<FooterData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<FooterData>("/footer/data")
      .then((res) => {
        if (res.data?.company_name) {
          const normalized = {
            ...res.data,
            phone: Array.isArray(res.data.phone)
              ? res.data.phone
              : [res.data.phone].filter(Boolean),
          };
          cachedData = normalized;
          setData(normalized);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div
      id="footer-page"
      className="container-fluid text-dark footer mt-5 wow fadeIn"
      style={{ backgroundColor: "#e9f1fc" }}
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Logo + Company Name */}
          <div className="col-lg-6 col-md-6">
            <img
              src="/img/logo.png"
              alt="aeirc_logo"
              className="img-fluid"
              style={{
                maxWidth: 100,
                margin: "0",
                display: "block",
                filter: "invert(32%) sepia(100%) saturate(1373%) hue-rotate(172deg) brightness(85%) contrast(100%)",
              }}
            />
            <h3 className="text-secondary mb-3 pt-2">{data.company_name}</h3>
          </div>

          {/* Quick Links — hardcoded */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary mb-3">Quick Link</h4>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/services">Services</Link>
            <Link className="btn btn-link" to="/products">Products</Link>
            <Link className="btn btn-link" to="/newsandnotices">News</Link>
            <Link className="btn btn-link" to="/privacyPolicy">Privacy Policy</Link>
            <button
              className="btn btn-link"
              onClick={onTermsClick}
              style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "none" }}
            >
              Terms & Condition
            </button>
          </div>

          {/* Contact + Social */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary mb-3">Contact</h4>
            <p className="mb-2 text-secondary">
              <i className="fas fa-map-marker-alt me-3"></i>{data.address}
            </p>
            <p className="mb-2 text-secondary">
              {(Array.isArray(data.phone) ? data.phone : [data.phone]).map((num, i) => (
                <span key={i} className="d-block">
                  <i className="fas fa-phone-alt me-3"></i>{num}
                </span>
              ))}
            </p>
            <p className="mb-2">
              <span className="custom-tooltip-wrapper">
                <Link
                  to={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=Booking%20Request`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav text-decoration-none d-flex align-items-center"
                >
                  <i className="fas fa-envelope me-3"></i>{data.email}
                </Link>
                <span className="custom-tooltip-text">Email us for booking</span>
              </span>
            </p>

            <div className="d-flex pt-2">
              {data.social_links.map((social, index) => (
                <a
                  key={index}
                  className="btn btn-outline-light btn-social"
                  href={toAbsoluteUrl(social.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
