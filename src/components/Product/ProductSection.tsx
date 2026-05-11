import React, { useEffect, useState } from "react";
import api from "../../api/client";

interface ProductItem {
  image: string;
  title: string;
  description: string;
}

interface ProductData {
  section_heading: string;
  intro_heading: string;
  paragraphs: string[];
  products: ProductItem[];
}

const fallbackData: ProductData = {
  section_heading: "Products Of AEIRC",
  intro_heading: "What We Offer",
  paragraphs: [
    "AEIRC offers a suite of powerful IT products designed to support healthcare, education, and organizational needs. Each product is purpose-built and professionally maintained by our team of developers and IT specialists.",
    "Explore our CMS, PIS, IMS, and Healthcare Management systems, tailored for scale, security, and user-friendliness.",
  ],
  products: [
    {
      image: "img/lab1.jpg",
      title: "Exam Application / CMS",
      description:
        "Manage exams and content efficiently with our scalable and secure CMS platform.",
    },
    {
      image: "img/lab2.jpg",
      title: "PIS - Personal Information System",
      description: "Organize employee or student data in a centralized system.",
    },
    {
      image: "img/lab3.jpg",
      title: "CMS / IMS - Inventory System",
      description: "Manage your content and inventory seamlessly.",
    },
    {
      image: "img/lab1.jpg",
      title: "Healthcare Management",
      description: "Streamlined patient and medical data administration.",
    },
  ],
};

let cachedData: ProductData | null = null;

const LabSection: React.FC = () => {
  const [data, setData] = useState<ProductData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<ProductData>("/products/data")
      .then((res) => {
        if (res.data?.products?.length > 0) {
          cachedData = res.data;
          setData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="product-section">
      <div className="py-5 container-xxl">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-highlight px-3">
              Our Products
            </h6>
            <h1 className="mb-5">{data.section_heading}</h1>
          </div>

          <div className="row px-2 lab-section-row">
            {/* Left Side - intro text */}
            <div className="text-content col-lg-5 col-md-12 custom-left mb-4">
              <h2 className="mb-3 text-highlight">{data.intro_heading}</h2>
              {data.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Right Side - product cards */}
            <div className="card-content col-lg-7 col-md-12 custom-right">
              <div className="product-row">
                {data.products.map((product, index) => (
                  <div key={index} className="product-items">
                    <div className="card h-100 shadow-sm border-0 overflow-hidden group">
                      <div className="overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="card-img-top zoom-hover"
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                          }}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-highlight fw-bold">
                          {product.title}
                        </h5>
                        <p className="card-text small">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabSection;
