const NoticeDescription = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Text Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                Official Notices
              </h6>
              <h1 className="mb-4">Important Announcements & Notifications</h1>

              <p className="mb-4">
                This section provides timely and official notices directly from AEIRC. Here, you'll find crucial updates
                regarding examination schedules, form deadlines, administrative changes, policy updates, and more.
              </p>

              <p className="mb-4">
                All notices are regularly posted to ensure students, educators, and stakeholders are always informed and 
                prepared. From exam registration windows to system maintenance alerts — everything important is listed here.
              </p>

              <p className="mb-4">
                We recommend checking this section frequently so you don’t miss any critical information that could impact your 
                academic journey or administrative responsibilities.
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
                  src="img/NewsAndNotices/notice1.png"
                  alt="AEIRC Notices"
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

export default NoticeDescription;
