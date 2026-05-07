import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageBanner from "../../components/Banner/PageBanner";
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
      <PageBanner pageKey="news" title="News & Notices" breadcrumb="News" />
      <NewsNoticesBreadcrumb />

      <div id="content-container">
        {sectionType === "news"}
        {sectionType === "notices"}
      </div>
    </div>
  );
};

export default NewsNoticePage;
