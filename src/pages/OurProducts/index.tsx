import LabSection from "../../components/Product/ProductSection";
// import TestimonialSection from "../../components/TestimonialComponent/TestimonialSection";
import PageBanner from "../../components/Banner/PageBanner";
// import ProductGallery from "../../components/ProductGallery";
import PartnersSection from "../../components/Clients/ClientsSection";

const products = () => {
  return (
    <div id="product-page">
      <PageBanner pageKey="products" title="Our Products" breadcrumb="Products" />
      <LabSection />
      {/* <ProductGallery/> */}
      <PartnersSection />
      {/* <TestimonialSection /> */}
    </div>
  );
};

export default products;
