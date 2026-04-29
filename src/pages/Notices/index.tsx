import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NoticeDescription from "../../components/NewsAndNotices/NoticeDescription";
import NoticeSection from "../../components/NewsAndNotices/NoticesSection";

const NoticePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="news-page">
      <NoticeDescription />
      <NoticeSection />
      {/* <div id="service-services">
        <NewsSection />
      </div> */}
    </div>
  );
};

export default NoticePage;
