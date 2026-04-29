import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
import Navbar from "./components/Nav/NavigationBar";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import OurTeam from "./pages/OurTeam";
import TestimonialPage from "./pages/TestimonialPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import Details from "./pages/ServicePage/Detail";
import ScrollToTopButton from "./components/Scroll/ScrollToTopButton";
import FooterSection from "./components/Footer/FooterSection";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditions from "./pages/TermsAndConditions";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./js/main.js";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/breadcrumb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TermsPopup from "./components/Legal/TermsAndConditions/TermsPopup";
import { useState } from "react";
import NewsPage from "./pages/News";
import NoticePage from "./pages/Notices";
import NewsDetails from "./pages/News/NewsDetail";
import NewsAndNoticesPage from "./pages/NewsAndNotices";
import NoticeDetails from "./pages/Notices/NoticeDetail";

function App() {
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:id" element={<Details />} />
        <Route path="/ServiceDetails/:id" element={<Details />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/Testimonial" element={<TestimonialPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newsandnotices" element={<NewsAndNoticesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/notices/:id" element={<NoticeDetails />} />

        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <ScrollToTopButton />
      <FooterSection onTermsClick={() => setShowTermsPopup(true)} />
      <TermsPopup
        show={showTermsPopup}
        onClose={() => setShowTermsPopup(false)}
      />
    </BrowserRouter>
  );
}

export default App;
