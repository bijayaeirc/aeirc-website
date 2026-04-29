import LabSection from "../../components/Product/ProductSection";
// import TestimonialSection from "../../components/TestimonialComponent/TestimonialSection";
import ExamHeader from "../../components/Product/ProductHeader";
// import ProductGallery from "../../components/ProductGallery";
import PartnersSection from "../../components/Clients/ClientsSection";

const products = () => {
  return (
    <div id="product-page">
      <ExamHeader />
      <LabSection />
      {/* <ProductGallery/> */}
      <PartnersSection />
      {/* <TestimonialSection /> */}
    </div>
  );
};

export default products;
