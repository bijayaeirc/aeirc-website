// ... keep all your imports and existing code above

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { newsData } from "../../data/NewsData";

const NewsSection = () => {
  const location = useLocation();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const newsOnly = newsData.filter((item) => item.category === "news");

  const currentNews = newsOnly.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div id="news-section">
      <div className="container-xxl py-3">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title">News</h6>
            <h1>AEIRC News & Updates</h1>
          </div>

          <div className="row gy-4">
            {currentNews.map((newsItem) => (
              <div key={newsItem.id} className="col-12">
                <div className="d-flex flex-md-row flex-column align-items-start shadow p-3 rounded bg-white news-card">
                  {/* Image */}
                  {newsItem.image && (
                    <div
                      className="me-md-4 mb-3 mb-md-0 flex-shrink-0"
                      style={{ maxWidth: "250px" }}
                    >
                      <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  )}

                  {/* Details */}
                  <div className="flex-grow-1">
                    <h4 className="mb-2">{newsItem.title}</h4>
                    <p className="text-muted mb-2">{newsItem.description}</p>
                    <p className="mb-1">
                      <strong>Published on:</strong> {newsItem.publishedDate}
                    </p>
                    <p className="mb-2">
                      <strong>Published by:</strong> {newsItem.publishedBy}
                    </p>

                    {/* Files */}
                    {/* {newsItem.files.length > 0 && (
                      <div className="mb-2">
                        <strong>Files:</strong>
                        <ul className="mb-0">
                          {newsItem.files.map((file, index) => (
                            <li key={index}>
                              <a
                                href={file}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download PDF {index + 1}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link
                        to={`/news/${newsItem.id}`}
                        state={{ from: location.pathname, news: newsItem }}
                      >
                        <button className="btn btn-custom">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <nav
            aria-label="News pagination"
            className="mt-4 d-flex justify-content-center"
          >
            <ul className="pagination">
              {/* Previous button */}
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  aria-label="Previous"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &laquo;
                </button>
              </li>

              {/* Numbered page buttons */}
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

              {/* Next button */}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  aria-label="Next"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
