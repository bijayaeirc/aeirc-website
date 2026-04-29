import { useState } from "react";
import { Link } from "react-router-dom";
import { noticeData } from "../../data/NoticeData";
import { upcomingPrograms } from "../../data/ProgramsData";

const NoticeAndProgramsSection = () => {
  // const location = useLocation();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(noticeData.length / itemsPerPage);

  const currentNotices = noticeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row gy-5">
          {/* Left: Notices */}
          <div className="col-12 col-lg-7">
            <div className="text-center mb-4">
              <h6 className="section-title text-secondary fw-semibold">
                Notices
              </h6>
              <h3 className="fw-bold">AEIRC Announcements</h3>
            </div>

            <div className="row gy-4">
              {currentNotices.map((notice) => (
                <div key={notice.id} className="col-12">
                  <div className="d-flex flex-column flex-md-row align-items-start shadow p-3 rounded bg-white h-100 news-card">
                    {notice.image && (
                      <div
                        className="me-md-4 mb-3 mb-md-0 flex-shrink-0 w-100 w-md-auto"
                        style={{ maxWidth: "250px" }}
                      >
                        <img
                          src={notice.image}
                          alt={notice.title}
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                    <div className="flex-grow-1 d-flex flex-column">
                      <h5 className="mb-2 text-secondary fw-bold">
                        {notice.title}
                      </h5>
                      <p
                        className="text-muted fst-italic mb-2"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Date: {notice.publishedDate}
                      </p>
                      <p className="mb-2 flex-grow-1">{notice.description}</p>

                      {/* {notice.files.length > 0 && (
                        <div className="mb-2">
                          <strong>Files:</strong>
                          <ul className="mb-0">
                            {notice.files.map((file, idx) => (
                              <li key={idx}>
                                <a
                                  href={file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Download PDF {idx + 1}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )} */}

                      <div className="mt-auto d-flex justify-content-end">
                        <Link
                          to={`/notices/${notice.id}`}
                          state={{
                            from: "/news-and-notices?section=notices",
                            notice,
                          }}
                          className="btn btn-custom btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav
              className="mt-4 d-flex justify-content-center"
              aria-label="Notice pagination"
            >
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    &laquo;
                  </button>
                </li>

                {[...Array(totalPages)].map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <li
                      key={pageNum}
                      className={`page-item ${
                        pageNum === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => goToPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right: Programs */}
          <div className="col-12 col-lg-5">
            <div className="text-center mb-4">
              <h6 className="section-title text-secondary fw-semibold">
                Programs
              </h6>
              <h3 className="fw-bold">Upcoming Events</h3>
            </div>

            <div className="list-group">
              {upcomingPrograms.map((program, index) => {
                const dateObj = new Date(program.date);
                const month = dateObj
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase();
                const day = dateObj.getDate();

                return (
                  <div
                    key={index}
                    className="list-group-item mb-3 rounded-3 shadow-sm bg-light d-flex align-items-center"
                  >
                    {/* Date Square */}
                    <div
                      className="text-center me-3 mb-2 mb-sm-0 rounded"
                      style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "#0082be",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      <div style={{ fontSize: "0.8rem" }}>{month}</div>
                      <div style={{ fontSize: "1.4rem", lineHeight: "1" }}>
                        {day}
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="flex-grow-1">
                      <h6 className="fw-bold text-secondary mb-1">
                        {program.title}
                      </h6>
                      <p className="mb-0 text-muted">{program.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeAndProgramsSection;
