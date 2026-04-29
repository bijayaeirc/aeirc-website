const About = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
           

            {/* Text Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                Services
              </h6>
              <h1 className="mb-4">Overview of our services</h1>
              {/* <p className="mb-4">
                Founded in 2023, Advance Education & Innovative Research Centre
                Pvt. Ltd. (AEIRC) is the first technology and innovation company
                in Nepal that is certified ISO 9001:2015
              </p> */}
              <p className="mb-4">
                Basically, AEIRC was established to fill the gaps between
                education, healthcare, and digital transformation by taking full
                advantage of the distinct resources of Nepal to meet the
                international standards. We strictly follow the standardized
                protocols in terms of compliance with ISO 9001:2015, GDPR, and
                the data protection laws of Nepal to offer secure, reliable, and
                high-quality services across all operations.
              </p>
              <p>AEIRC provides the following services:</p>

              {/* Features */}
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "Computer-Based Test (CBT) Services",
                  "Server Infrastructure & Hosting",
                  "Software Application and Development",
                  "IT Consulting & Infrastructure Services ",
                  "Telemedicine & Health Technology ",
                  "AI & Robotics Education",
                  "Research, Innovation & Capacity Building",
                  "Commitment to Standardized Protocols",
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-highlight me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Read More Button
              <a className="btn btn-custom py-3 px-5 mt-2" href="/about">
                Read More
              </a> */}
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 zoom-container">
                <img
                  className="img-fluid position-absolute w-100 h-100 zoom-image"
                  src="img/whatsapp/Aeirc_lobby.jpg"
                  alt="Aeirc_lobby"
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

export default About;
