const NewsDescription = () => {
  return (
    <div id="">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Text Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                News & Updates
              </h6>
              <h1 className="mb-4">Stay Informed with the Latest News</h1>

              <p className="mb-4">
                Welcome to our News section — your trusted source for the latest updates, announcements,
                and highlights from AEIRC. Whether it's the launch of a new digital examination system,
                academic collaborations, upcoming events, or major achievements, you’ll find all the
                essential information right here.
              </p>

              <p className="mb-4">
                We believe in keeping our community informed and engaged. This page is regularly updated
                to ensure you’re always aware of what’s happening at AEIRC and in the broader educational
                and technological landscape.
              </p>

              <p className="mb-4">
                Browse through our latest news articles to stay connected with our mission and the steps we
                are taking to drive innovation and excellence in education across Nepal.
              </p>
            </div>

            {/* Image Content */}
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 zoom-container">
                <img
                  className="img-fluid position-absolute w-100 h-100 zoom-image"
                  src="img/whatsapp/l1.jpg" 
                  alt="AEIRC News Section"
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

export default NewsDescription;
