const TermsIntro = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Text Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                Legal Notice
              </h6>
              <h1 className="mb-4">Terms & Conditions – AEIRC</h1>
              <p className="mb-4">
                By using AEIRC’s services, you’re agreeing to follow our Terms
                of Use. These Terms and Conditions explain how you can access
                and use our platforms, digital services, and facilities.
              </p>
              <p className="mb-4">
                Whether registering for exams, engaging with telehealth
                services, or using any of our technological platforms, your
                agreement ensures mutual understanding, safety, and proper
                service delivery.
              </p>
              <p className="mb-3">Key points covered in our terms include:</p>

              {/* Key Points */}
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "User responsibilities and conduct",
                  "Service availability and limitations",
                  "Exam rules and cancellation policy",
                  "Intellectual property usage",
                  "Dispute resolution and governing law",
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
              <a className="btn btn-custom py-3 px-5 mt-2" href="#full-terms">
                Read Full Terms
              </a> */}
            </div>

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
                  alt="Terms and Conditions"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsIntro;
