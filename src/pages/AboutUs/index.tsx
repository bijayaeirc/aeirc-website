import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageBanner from "../../components/Banner/PageBanner";
import ServiceSection from "../../components/Service/ServiceSection";
import About from "../../components/About/About";
import TeamSection from "../../components/Team/TeamSection";
// import WhyUs from "../../components/WhyUs";
import PartnersSection from "../../components/Clients/ClientsSection";
import SmarterAccordion from "../../components/Faq/FaqSection";
import WhyChooseUs from "../../components/Whyus/WhyChooseUs";

const AboutUs = () => {
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
    <div id="about_us-page">
      <PageBanner pageKey="about" title="About Us" breadcrumb="About" />
      <About />
      <ServiceSection />
      <WhyChooseUs />
      <SmarterAccordion />
      {/* <WhyUs /> */}
      <div id="about-services"></div>
      <PartnersSection />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
