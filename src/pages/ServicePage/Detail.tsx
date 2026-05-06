import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { services } from "../../data/servicesData";
import PageBanner from "../../components/Banner/PageBanner";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const fromPath = location.state?.from || "/services";
  const sectionId = location.state?.sectionId || null;

  // const from = location.state?.from || "/services";

  const service = services.find((s) => s.id === id);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const detailSection = document.getElementById("detail-page");
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [id]);

  if (!service) {
    return (
      <div className="text-danger text-center mt-5">Service not found.</div>
    );
  }

  return (
    <>
      <div id="detail-page">
        <PageBanner pageKey="services" title="Our Services" breadcrumb="Services" />

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              {/* Image Section (left) */}
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src={service.image || "/img/default.jpg"} // Make sure to have `image` in your service object
                    alt={service.title}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Text Content Section (right) */}
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-highlight pe-3">
                  Our Services
                </h6>
                <h1 className="mb-4">{service.title}</h1>
                <p className="mb-4">{service.description}</p>
                <p className="mb-4" style={{ whiteSpace: "pre-line" }}>
                  {service.detail}
                </p>

                {/* Optional: List of features */}
                {service.lists && service.lists.length > 0 && (
                  <div className="row gy-2 gx-4 mb-4">
                    {service.lists.map((item, index) => (
                      <div className="col-sm-6" key={index}>
                        <p className="mb-0">
                          <i className="fa fa-arrow-right text-highlight me-2"></i>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Back or CTA button */}
                <button
                  className="btn btn-custom py-3 px-5 mt-2"
                  onClick={() => {
                    navigate(fromPath, { state: { scrollToId: sectionId } });
                  }}
                >
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
