import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../../components/Banner/PageBanner";
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

const NoticeDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<NoticeItem | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get<NoticeItem>(`/notices/detail/${id}`)
      .then((res) => { if (res.data?.id) setItem(res.data); })
      .catch(() => {})
      .finally(() => setLoading(false));

    api
      .get<Program[]>("/programs/upcoming")
      .then((res) => { if (Array.isArray(res.data)) setPrograms(res.data); })
      .catch(() => {});
  }, [id]);

  if (loading) {
    return (
      <div id="notice-detail-page">
        <PageBanner pageKey="news" title="News & Notices" breadcrumb="Notices" />
      </div>
    );
  }

  if (!item) {
    return <div className="text-danger text-center mt-5">Notice not found.</div>;
  }

  return (
    <div id="notice-detail-page">
      <PageBanner pageKey="news" title="News & Notices" breadcrumb="Notices" />

      <div className="container-xxl py-5" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-7" style={{ overflowWrap: "break-word", minWidth: 0 }}>
              <h1 className="mb-4">{item.title}</h1>
              <p className="mb-4">{item.description}</p>
              <img
                src={item.image || "/img/default.jpg"}
                alt={item.title}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
              />
            </div>

            <div className="col-lg-5">
              <div className="bg-custom p-3 rounded mb-4 shadow-sm">
                <p><strong>Published by:</strong> {item.published_by}</p>
                <p><strong>Published on:</strong> {item.published_date}</p>
              </div>

              {programs.length > 0 && (
                <div className="col-12">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold">Upcoming Events</h3>
                  </div>
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
                              fontWeight: "bold", flexShrink: 0,
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
