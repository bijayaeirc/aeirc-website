import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        type="button"
        className="btn btn-scroll rounded-circle position-fixed scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Go to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    )
  );
}

export default ScrollToTopButton;
