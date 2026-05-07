import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { noticeData } from "../../data/NoticeData";
import PageBanner from "../../components/Banner/PageBanner";

const upcomingPrograms = [
  {
    title: "AI Workshop 2025",
    date: "2025-08-15",
    description: "Explore AI trends and hands-on sessions.",
  },
  {
    title: "Tech Conference 2025",
    date: "2025-09-10",
    description: "Annual tech meet for networking and learning.",
  },
];

const NoticeDetails = () => {
  const { id } = useParams();
  const noticeItem = noticeData.find((n) => n.id === id);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const detailSection = document.getElementById("notice-detail-page");
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [id]);

  if (!noticeItem) {
    return (
      <div className="text-danger text-center mt-5">Notice not found.</div>
    );
  }

  return (
    <div id="notice-detail-page">
      <PageBanner pageKey="news" title="News & Notices" breadcrumb="Notices" />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row gx-5">
            {/* Left 60% */}
            <div className="col-lg-7">
              <h1 className="mb-4">{noticeItem.title}</h1>
              <p className="mb-4">{noticeItem.description}</p>
              <img
                src={noticeItem.image || "/img/default.jpg"}
                alt={noticeItem.title}
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>

            {/* Right 40% */}
            <div className="col-lg-5">
              <div className="bg-custom p-3 rounded mb-4 shadow-sm">
                <p>
                  <strong>Published by:</strong> {noticeItem.publishedBy}
                </p>
                <p>
                  <strong>Published on:</strong> {noticeItem.publishedDate}
                </p>
              </div>

              {/* {noticeItem.files && noticeItem.files.length > 0 && (
                <div className="mb-5 bg-custom p-3 rounded mb-4 shadow-sm">
                  <h5>download Files</h5>
                  <ul className="list-unstyled">
                    {noticeItem.files.map((file, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-custom btn-sm"
                          download
                        >
                          📄 Download PDF {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              {/* Upcoming Events / Programs */}
              <div className="col-12">
                <div className="text-center mb-4">
                  
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
                          <p className="mb-0 text-muted">
                            {program.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
