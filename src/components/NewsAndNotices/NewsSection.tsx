import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../api/client";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  published_date: string;
  published_by: string;
}

const ITEMS_PER_PAGE = 5;

const NewsSection = () => {
  const location = useLocation();
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .get<NewsItem[]>("/news/list")
      .then((res) => {
        if (Array.isArray(res.data)) setAllNews(res.data);
      })
      .catch(() => {});
  }, []);

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);
  const currentNews = allNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  if (allNews.length === 0) return null;

  return (
    <div id="news-section">
      <div className="container-xxl py-3">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title">News</h6>
            <h1>AEIRC News & Updates</h1>
          </div>

          <div className="row gy-4">
            {currentNews.map((item) => (
              <div key={item.id} className="col-12">
                <div className="d-flex flex-md-row flex-column align-items-start shadow p-3 rounded bg-white news-card">
                  {item.image && (
                    <div className="me-md-4 mb-3 mb-md-0 flex-shrink-0" style={{ maxWidth: "250px" }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  )}
                  <div className="flex-grow-1" style={{ minWidth: 0, overflowWrap: "break-word" }}>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-muted mb-2" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.description}</p>
                    <p className="mb-1"><strong>Published on:</strong> {item.published_date}</p>
                    <p className="mb-2"><strong>Published by:</strong> {item.published_by}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link
                        to={`/news/${item.id}`}
                        state={{ from: location.pathname }}
                      >
                        <button className="btn btn-custom">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-4 d-flex justify-content-center" aria-label="News pagination">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    &laquo;
                  </button>
                </li>
                {[...Array(totalPages)].map((_, idx) => (
                  <li key={idx + 1} className={`page-item ${idx + 1 === currentPage ? "active" : ""}`}>
                    <button className="page-link" onClick={() => goToPage(idx + 1)}>{idx + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
