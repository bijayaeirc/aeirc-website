const ProductGallery = () => {
  return (
    <div>
      <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            AEIRC
          </h6>
          <h1 className="mb-5">Product Gallery</h1>
        </div>

        <div className="row g-3">
          {/* Left Side */}
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              {/* Web Design */}
              <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="public\img\WhatsApp Image 2025-06-05 at 13.24.40_c9e8cd66.jpg" alt="Web Design" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: '1px' }}
                  >
                    <h5 className="m-0">Our Lab 1</h5>
                    <small className="text-highlight">100 Computers</small>
                  </div>
                </a>
              </div>

              {/* Graphic Design */}
              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="public\img\WhatsApp Image 2025-06-05 at 13.24.38_1c5f2b3a.jpg" alt="Graphic Design" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: '1px' }}
                  >
                    <h5 className="m-0">Lab 2</h5>
                    <small className="text-highlight">49 Computers</small>
                  </div>
                </a>
              </div>

              {/* Video Editing */}
              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="public\img\aaa.jpg" alt="Video Editing" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: '1px' }}
                  >
                    <h5 className="m-0">Lab 3</h5>
                    <small className="text-highlight">49 Computers</small>
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
                src="img/cat-4.jpg"
                alt="Online Marketing"
                style={{ objectFit: 'cover' }}
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: '1px' }}
              >
                <h5 className="m-0">Meeting hall</h5>
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

export default ProductGallery
