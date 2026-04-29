import { Link } from "react-router-dom";

const FooterSection: React.FC<{ onTermsClick: () => void }> = ({ onTermsClick }) => {
  return (
    <div
      id="footer-page"
      className="container-fluid text-dark footer mt-5 wow fadeIn"
      style={{ backgroundColor: "#e9f1fc" }}
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 col-md-6">
            <img
              src="/img/logo.png"
              alt="aeirc_logo"
              className="img-fluid"
              style={{
                maxWidth: 100,
                margin: "0",
                display: "block",
                filter:
                  "invert(32%) sepia(100%) saturate(1373%) hue-rotate(172deg) brightness(85%) contrast(100%)",
              }}
            />
            <h3 className="text-secondary mb-3 pt-2">
              Advance Education & Innovative Research Centre Pvt. Ltd.
            </h3>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary mb-3">Quick Link</h4>
            <Link className="btn btn-link" to="about">
              About Us
            </Link>
            <Link className="btn btn-link" to="contact">
              Contact Us
            </Link>
            <Link className="btn btn-link" to="services">
              Services
            </Link>
            <Link className="btn btn-link" to="products">
             Products
            </Link>
            <Link className="btn btn-link" to="news">
             News
            </Link>
            <Link className="btn btn-link" to="privacyPolicy">
              Privacy Policy
            </Link>
            
            {/* ✅ Use a <button> instead of <Link> for modal */}
            <button
              className="btn btn-link"
              onClick={onTermsClick}
              style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "none",}}
            >
              Terms & Condition
            </button>
            {/* <Link className="btn btn-link" to="#">
              FAQs & Help
            </Link> */}
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary mb-3">Contact</h4>
            <p className="mb-2 text-secondary">
              <i className="fas fa-map-marker-alt me-3 "></i>Babarmal, Kathmandu
            </p>
            <p className="mb-2 text-secondary">
              <i className="fas fa-phone-alt me-3"></i>9851046500
            </p>
            <p className="mb-2">
              <span className="custom-tooltip-wrapper">
                <Link
                  to="https://mail.google.com/mail/?view=cm&fs=1&to=info@aeirc.com&su=Booking%20Request"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav text-decoration-none d-flex align-items-center"
                >
                  <i className="fas fa-envelope me-3"></i>info@aeirc.com
                </Link>
                <span className="custom-tooltip-text">
                  Email us for booking
                </span>
              </span>
            </p>

            <div className="d-flex pt-2">
              {/* <Link className="btn btn-outline-light btn-social" to="#">
                <i className="fab fa-twitter"></i>
              </Link> */}
              <Link
                className="btn btn-outline-light btn-social"
                to="https://www.facebook.com/share/1Fg5keFa1e/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              {/* <Link className="btn btn-outline-light btn-social" to="#">
                <i className="fab fa-youtube"></i>
              </Link> */}
              <Link
                className="btn btn-outline-light btn-social"
                to="https://www.linkedin.com/company/aeirc-tech/?originalSubdomain=np"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
