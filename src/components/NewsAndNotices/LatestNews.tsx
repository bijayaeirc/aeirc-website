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

const LatestNewsSection = () => {
  const location = useLocation();
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<NewsItem[]>("/news/latest")
      .then((res) => {
        if (Array.isArray(res.data)) setItems(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading || items.length === 0) return null;

  const mainItem = items[0];
  const sideItems = items.slice(1, 5);

  return (
    <div className="container py-3" id="latest-news-section">
      <div className="text-center mb-5">
        <h6 className="section-title">Latest News</h6>
        <h1>Stay Updated with Recent Highlights</h1>
      </div>

      <div className="row g-4">
        {/* Left: featured item */}
        <div className="col-lg-7">
          <Link
            to={`/news/${mainItem.id}`}
            state={{ from: location.pathname }}
            style={{ textDecoration: "none" }}
          >
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
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                <h5 className="mb-1 text-white">{mainItem.title}</h5>
                <small className="text-white">{mainItem.published_date}</small>
              </div>
            </div>
          </Link>
        </div>

        {/* Right: next 4 items */}
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
                <small className="text-muted d-block mb-1">{item.published_date}</small>
                <p
                  className="mb-2 small"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/news/${item.id}`}
                    state={{ from: location.pathname }}
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
