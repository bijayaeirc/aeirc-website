import { useEffect, useState } from "react";
import NewsPage from "../../pages/News";
import NoticePage from "../../pages/Notices";
import { useLocation } from "react-router-dom";

const breadcrumbItems = [
  { icon: "fa fa-newspaper", label: "News", section: "news", isLink: false },
  { icon: "fa fa-bell", label: "Notices", section: "notices", isLink: false },
];

const BreadcrumbExpand = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultSection = queryParams.get("section") || "news";

  const [activeSection, setActiveSection] = useState(defaultSection);

  // Update activeSection if query param changes (e.g., when returning via back button)
  useEffect(() => {
    const newSection = queryParams.get("section");
    if (newSection && newSection !== activeSection) {
      setActiveSection(newSection);
    }
  }, [location.search]);

  const renderContent = () => {
    switch (activeSection) {
      case "news":
        return <NewsPage />;
      case "notices":
        return <NoticePage />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="breadcrumb-container">
        {breadcrumbItems.map(({ icon, label, section }, index) => (
          <div
            key={index}
            className="breadcrumb-circle"
            style={{
              background:
                activeSection === section ? "#0082be" : "#fff", // blue background when active
              color: activeSection === section ? "#fff" : "#0082be", // text color change for better contrast
              cursor: "pointer",
              borderRadius: "50px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              userSelect: "none",
              fontSize:"24px",
              fontWeight:"600",
            }}
onClick={() => {
  setActiveSection(section);
  window.history.replaceState(null, "", `?section=${section}`);
}}
          >
            <i className={`${icon} icon me-2`}></i>
            <span className="text">{label}</span>
          </div>
        ))}
      </div>

      <div id="content-container">{renderContent()}</div>
    </>
  );
};

export default BreadcrumbExpand;
