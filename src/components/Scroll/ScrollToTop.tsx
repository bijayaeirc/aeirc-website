import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Convert route path to id format
    const idMap: Record<string, string> = {
      "/": "home-page",
      "/about": "about_us-page",
      "/services": "service-page",
      "/products": "product-page",
      "/contact": "contact_us-page",
    };

    const targetId = idMap[pathname];

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" }); // fallback
      }
    }, 100); // wait for DOM to load
  }, [pathname]);

  return null;
};

export default ScrollToTop;
