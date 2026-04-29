const Categories = () => {
  return (
    <div id="gallery-section">
      <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            AEIRC
          </h6>
          <h1 className="mb-5"> Gallery</h1>
        </div>

        <div className="row g-3">
          {/* Left Side */}
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="/img/AEIRC_Gallery/gallery1.jpg" alt="hall A" />
                  <div
                    className="bg-white text-center text-highlight position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: '1px' }}
                  >
                    <h5 className="m-0">Hall A</h5>
                    {/* <small className="text-highlight">100 Computers</small> */}
                  </div>
                </a>
              </div>

              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid img-container2" src="/img/lab.jpg" alt="hall B" />
                  <div
                    className="bg-white text-center text-highlight position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: '1px' }}
                  >
                    <h5 className="m-0">Hall B</h5>
                    {/* <small className="text-highlight">49 Computers</small> */}
                  </div>
                </a>
              </div>

              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid img-container2" src="/img/whatsapp/labC.jpg" alt="hall C" />
                  <div
                    className="bg-white text-center text-highlight position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: '1px' }}
                  >
                    <h5 className="m-0">Hall C</h5>
                    <small className="text-highlight"></small>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: '350px' }}
          >
            <a className="position-relative d-block h-100 overflow-hidden" href="#">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="/img/AEIRC_Gallery/gallery5.jpg"
                alt="Online Marketing"
                style={{ objectFit: 'cover' }}
              />
              <div
                className="bg-white text-center text-highlight position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: '1px' }}
              >
                <h5 className="m-0">Meeting Hall</h5>
                {/* <small className="text-highlight">49 Courses</small> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Categories
