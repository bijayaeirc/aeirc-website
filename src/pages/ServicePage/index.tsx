import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceHeader from "../../components/Service/ServiceHeader";
import ServiceSection from "../../components/Service/ServiceSection";
import ServiceDescription from "../../components/Service/ServiceDescription";

const ServicePage = () => {
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
    <div id="service-page">
      <ServiceHeader />
      <ServiceDescription/>
      <div id="service-services">
        <ServiceSection />
      </div>
    </div>
  );
};

export default ServicePage;
