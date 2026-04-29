import React from "react";

const LabSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      image: "img/lab1.jpg",
      title: "Exam Application / CMS",
      description:
        "Manage exams and content efficiently with our scalable and secure CMS platform.",
    },
    {
      id: 2,
      image: "img/lab2.jpg",
      title: "PIS - Personal Information System",
      description: "Organize employee or student data in a centralized system.",
    },
    {
      id: 3,
      image: "img/lab3.jpg",
      title: "CMS / IMS - Inventory System",
      description: "Manage your content and inventory seamlessly.",
    },
    {
      id: 4,
      image: "img/lab1.jpg",
      title: "Healthcare Management",
      description: "Streamlined patient and medical data administration.",
    },
  ];

  return (
    <div className="product-section">
      <div className="py-5 container-xxl ">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-highlight px-3">
              Our Products
            </h6>
            <h1 className="mb-5">Products Of AEIRC</h1>
          </div>

          <div className="row px-2 lab-section-row">
            {/* Left Side - 40% */}
            <div className="text-content col-lg-5 col-md-12 custom-left mb-4">
              <h2 className="mb-3 text-highlight">What We Offer</h2>
              <p>
                AEIRC offers a suite of powerful IT products designed to support
                healthcare, education, and organizational needs. Each product is
                purpose-built and professionally maintained by our team of
                developers and IT specialists.
              </p>
              <p>
                Explore our CMS, PIS, IMS, and Healthcare Management systems,
                tailored for scale, security, and user-friendliness.
              </p>
            </div>

            {/* Right Side - 60% */}
            <div className="card-content col-lg-7 col-md-12 custom-right">
              <div className="product-row">
                {courses.map((course) => (
                  <div key={course.id} className="product-items">
                    <div className="card h-100 shadow-sm border-0 overflow-hidden group">
                      <div className="overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
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
                          {course.title}
                        </h5>
                        <p className="card-text small">{course.description}</p>
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
