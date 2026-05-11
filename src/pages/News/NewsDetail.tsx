import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../../components/Banner/PageBanner";
import api from "../../api/client";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  second_image?: string;
  published_date: string;
  published_by: string;
}

const NewsDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get<NewsItem>(`/news/detail/${id}`)
      .then((res) => { if (res.data?.id) setItem(res.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div>
        <PageBanner pageKey="news" title="News & Notices" breadcrumb="News" />
      </div>
    );
  }

  if (!item) {
    return <p className="text-center py-5 text-danger">News item not found.</p>;
  }

  return (
    <div>
      <PageBanner pageKey="news" title="News & Notices" breadcrumb="News" />

      <div className="container my-5" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-md-7" style={{ overflowWrap: "break-word", minWidth: 0 }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid mb-4 rounded shadow"
            />
          </div>

          <div className="col-md-5">
            {item.second_image && (
              <img
                src={item.second_image}
                alt="Additional visual"
                className="img-fluid mb-3 rounded"
              />
            )}
            <div className="bg-custom p-3 rounded shadow-sm mb-3">
              <p><strong>Published By:</strong> {item.published_by}</p>
              <p><strong>Published Date:</strong> {item.published_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
