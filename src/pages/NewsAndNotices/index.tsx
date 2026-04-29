import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsAndNoticesHeader from "../../components/NewsAndNotices/NewsAndNoticesHeader";
import NewsNoticesBreadcrumb from "../../components/Breadcrumbs/NewsNoticesBreadcrumb";

const NewsNoticePage = () => {
  const location = useLocation();
  const sectionType = location.state?.section || "news"; // default to news

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
    <div id="news-notices-page">
      <NewsAndNoticesHeader />
      <NewsNoticesBreadcrumb />

      <div id="content-container">
        {sectionType === "news"}
        {sectionType === "notices"}
      </div>
    </div>
  );
};

export default NewsNoticePage;
