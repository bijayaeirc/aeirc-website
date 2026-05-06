import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { services as fallbackServices } from "../../data/servicesData";
import type { Service } from "../../data/servicesData";
import api from "../../api/client";

let cachedServices: Service[] | null = null;

const ServiceSection = () => {
  const location = useLocation();
  const [services, setServices] = useState<Service[]>(
    cachedServices ?? fallbackServices
  );

  useEffect(() => {
    if (cachedServices) return;
    api
      .get<Service[]>("/services")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          cachedServices = res.data;
          setServices(res.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="container-xxl py-5 service-container">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            Services
          </h6>
          <h1 className="mb-5">Services Provided By US</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={index}
              className="col-lg-3 col-sm-6 wow fadeInUp"
            >
              <Link
                to={`/ServiceDetails/${service.id}`}
                state={{ from: location.pathname, sectionId: service.id }}
                style={{ textDecoration: "none" }}
              >
                <div className="service-item service-bg service-hover text-center h-[350px] flex flex-col justify-between p-4 shadow-md rounded-lg transition duration-300">
                  <div className="flex flex-col flex-grow">
                    <i className={`fa fa-3x ${service.icon} mb-4`}></i>
                    <h5 className="mb-3 service-title">{service.title}</h5>
                    <p className="text-sm line-clamp-3">{service.description}</p>
                    <div className="mt-4">
                      <Link
                        to={`/ServiceDetails/${service.id}`}
                        state={{ from: location.pathname, sectionId: service.id }}
                        className="btn btn-custom"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
