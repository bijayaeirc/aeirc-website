const PrivacyPolicyIntro = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Image Section */}
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 zoom-container">
                <img
                  className="img-fluid position-absolute w-100 h-100 zoom-image"
                  src="img/whatsapp/Reception.jpg"
                  alt="Privacy Policy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                Legal Notice
              </h6>
              <h1 className="mb-4">Privacy Policy – AEIRC</h1>
              <p className="mb-4">
                AEIRC is committed to protecting the privacy of our clients, users,
                and visitors. This Privacy Policy explains how we collect, use, store,
                and protect your personal information in compliance with
                <strong> ISO 9001:2015</strong>, <strong>GDPR</strong>, and the
                <strong> Data Protection Laws of Nepal</strong>.
              </p>
              <p className="mb-4">
                We believe in transparency and integrity when it comes to handling
                sensitive data. Whether you're registering for exams, using our
                telemedicine services, or interacting with our platforms, your privacy
                is respected and protected.
              </p>
              <p className="mb-3">Key data we handle includes:</p>

              {/* Key Points */}
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "Personal details (name, email, phone, etc.)",
                  "User credentials and usage activity",
                  "Exam registration and biometric data",
                  "Health vitals via Digital Care™",
                  "Service usage and communication logs",
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-highlight me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Optional CTA
              <a className="btn btn-custom py-3 px-5 mt-2" href="#full-policy">
                Read Full Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyIntro;
