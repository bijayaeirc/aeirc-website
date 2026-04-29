import { Link, useLocation } from "react-router-dom";
import { newsData } from "../../data/NewsData";

const LatestNewsSection = () => {
  const location = useLocation();

  // Filter latest category
  const latestNews = newsData
    .filter((item) => item.category === "latest")
    // Sort by publishedDate descending (newest first)
    .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));

  if (latestNews.length === 0) return null;

  // Most recent item on left
  const mainItem = latestNews[0];
  // Next 4 items on right (if any)
  const sideItems = latestNews.slice(1, 5);

  return (
    <div className="container py-3" id="latest-news-section">
      <div className="text-center mb-5">
        <h6 className="section-title">Latest News</h6>
        <h1>Stay Updated with Recent Highlights</h1>
      </div>

      <div className="row g-4">
        {/* Left: Most recent news */}
        <div className="col-lg-7">
          <div
            className="position-relative h-100 overflow-hidden rounded shadow"
            style={{ maxHeight: 545 }}
          >
            <img
              src={mainItem.image}
              alt={mainItem.title}
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <div
              className="position-absolute bottom-0 start-0 w-100 p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h5 className="mb-1 text-white">{mainItem.title}</h5>
              <small className="text-white">{mainItem.publishedDate}</small>
            </div>
          </div>
        </div>

        {/* Right: next 4 latest items */}
        <div className="col-lg-5 d-flex flex-column gap-3">
          {sideItems.map((item) => (
            <div
              key={item.id}
              className="d-flex bg-white border rounded shadow-sm overflow-hidden"
              style={{ minHeight: "110px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{ width: "100px", objectFit: "cover" }}
              />
              <div className="p-2 flex-grow-1 d-flex flex-column">
                <h6 className="mb-1">{item.title}</h6>
                <small className="text-muted d-block mb-1">
                  {item.publishedDate}
                </small>
                <p
                  className="mb-2 small"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                  }}
                  title={item.description}
                >
                  {item.description}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/news/${item.id}`}
                    state={{ from: location.pathname, news: item }}
                    className="btn btn-sm btn-custom"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
