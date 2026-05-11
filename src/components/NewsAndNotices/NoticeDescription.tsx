import { useEffect, useState } from "react";
import api from "../../api/client";

interface SectionIntro {
  image_url: string;
  heading: string;
  paragraphs: string[];
}

const fallbackData: SectionIntro = {
  image_url: "img/NewsAndNotices/notice1.png",
  heading: "Important Announcements & Notifications",
  paragraphs: [
    "This section provides timely and official notices directly from AEIRC. Here, you'll find crucial updates regarding examination schedules, form deadlines, administrative changes, policy updates, and more.",
    "All notices are regularly posted to ensure students, educators, and stakeholders are always informed and prepared. From exam registration windows to system maintenance alerts — everything important is listed here.",
    "We recommend checking this section frequently so you don't miss any critical information that could impact your academic journey or administrative responsibilities.",
  ],
};

let cachedData: SectionIntro | null = null;

const NoticeDescription = () => {
  const [data, setData] = useState<SectionIntro>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<SectionIntro>("/notices/intro")
      .then((res) => {
        if (res.data?.heading) {
          cachedData = res.data;
          setData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ overflowWrap: "break-word", minWidth: 0 }}
            >
              <h6 className="section-title bg-white text-start text-highlight pe-3">
                Official Notices
              </h6>
              <h1 className="mb-4">{data.heading}</h1>
              {data.paragraphs.map((para, i) => (
                <p className="mb-4" key={i}>{para}</p>
              ))}
            </div>

            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 zoom-container">
                <img
                  className="img-fluid position-absolute w-100 h-100 zoom-image"
                  src={data.image_url}
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
