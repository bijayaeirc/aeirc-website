import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsSection from "../../components/NewsAndNotices/NewsSection";
import NewsDescription from "../../components/NewsAndNotices/NewsDescription";
import LatestNewsSection from "../../components/NewsAndNotices/LatestNews";

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
      <NewsDescription />
      <LatestNewsSection />
      <NewsSection />
      {/* <div id="service-services">
        <NewsSection />
      </div> */}
    </div>
  );
};

export default NoticePage;
