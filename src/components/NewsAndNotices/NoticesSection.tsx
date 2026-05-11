import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/client";

interface NoticeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  published_date: string;
  published_by: string;
}

interface Program {
  title: string;
  date: string;
  description: string;
}

const ITEMS_PER_PAGE = 5;

const NoticeAndProgramsSection = () => {
  const [allNotices, setAllNotices] = useState<NoticeItem[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .get<NoticeItem[]>("/notices/list")
      .then((res) => { if (Array.isArray(res.data)) setAllNotices(res.data); })
      .catch(() => {});

    api
      .get<Program[]>("/programs/upcoming")
      .then((res) => { if (Array.isArray(res.data)) setPrograms(res.data); })
      .catch(() => {});
  }, []);

  const totalPages = Math.ceil(allNotices.length / ITEMS_PER_PAGE);
  const currentNotices = allNotices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
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
              <h6 className="section-title text-secondary fw-semibold">Notices</h6>
              <h3 className="fw-bold">AEIRC Announcements</h3>
            </div>

            {allNotices.length === 0 ? (
              <p className="text-center text-muted">No notices available.</p>
            ) : (
              <>
                <div className="row gy-4">
                  {currentNotices.map((notice) => (
                    <div key={notice.id} className="col-12">
                      <div className="d-flex flex-column flex-md-row align-items-start shadow p-3 rounded bg-white h-100 news-card">
                        {notice.image && (
                          <div className="me-md-4 mb-3 mb-md-0 flex-shrink-0 w-100 w-md-auto" style={{ maxWidth: "250px" }}>
                            <img src={notice.image} alt={notice.title} className="img-fluid rounded" />
                          </div>
                        )}
                        <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0, overflowWrap: "break-word" }}>
                          <h5 className="mb-2 text-secondary fw-bold">{notice.title}</h5>
                          <p className="text-muted fst-italic mb-2" style={{ fontSize: "0.9rem" }}>
                            Date: {notice.published_date}
                          </p>
                          <p className="mb-2 flex-grow-1" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{notice.description}</p>
                          <div className="mt-auto d-flex justify-content-end">
                            <Link
                              to={`/notices/${notice.id}`}
                              state={{ from: "/news-and-notices?section=notices" }}
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

                {totalPages > 1 && (
                  <nav className="mt-4 d-flex justify-content-center" aria-label="Notice pagination">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
                      </li>
                      {[...Array(totalPages)].map((_, idx) => (
                        <li key={idx + 1} className={`page-item ${idx + 1 === currentPage ? "active" : ""}`}>
                          <button className="page-link" onClick={() => goToPage(idx + 1)}>{idx + 1}</button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
                      </li>
                    </ul>
                  </nav>
                )}
              </>
            )}
          </div>

          {/* Right: Programs */}
          <div className="col-12 col-lg-5">
            <div className="text-center mb-4">
              <h6 className="section-title text-secondary fw-semibold">Programs</h6>
              <h3 className="fw-bold">Upcoming Events</h3>
            </div>

            {programs.length === 0 ? (
              <p className="text-center text-muted">No upcoming events.</p>
            ) : (
              <div className="list-group">
                {programs.map((program, index) => {
                  const dateObj = new Date(program.date);
                  const month = dateObj.toLocaleString("default", { month: "short" }).toUpperCase();
                  const day = dateObj.getDate();

                  return (
                    <div
                      key={index}
                      className="list-group-item mb-3 rounded-3 shadow-sm bg-light d-flex align-items-center"
                    >
                      <div
                        className="text-center me-3 rounded"
                        style={{
                          width: "70px", height: "70px",
                          backgroundColor: "#0082be", color: "white",
                          display: "flex", flexDirection: "column",
                          justifyContent: "center", alignItems: "center",
                          fontWeight: "bold", fontSize: "0.9rem", flexShrink: 0,
                        }}
                      >
                        <div style={{ fontSize: "0.8rem" }}>{month}</div>
                        <div style={{ fontSize: "1.4rem", lineHeight: "1" }}>{day}</div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="fw-bold text-secondary mb-1">{program.title}</h6>
                        <p className="mb-0 text-muted">{program.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeAndProgramsSection;
