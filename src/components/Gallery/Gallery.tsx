import { useEffect, useState } from "react";
import api from "../../api/client";

interface GalleryImage {
  image_url: string;
  label: string;
}

interface GalleryData {
  section_heading: string;
  images: GalleryImage[];
}

const fallbackData: GalleryData = {
  section_heading: "Gallery",
  images: [
    { image_url: "/img/AEIRC_Gallery/gallery1.jpg", label: "Hall A" },
    { image_url: "/img/lab.jpg", label: "Hall B" },
    { image_url: "/img/whatsapp/labC.jpg", label: "Hall C" },
    { image_url: "/img/AEIRC_Gallery/gallery5.jpg", label: "Meeting Hall" },
  ],
};

let cachedData: GalleryData | null = null;

const Categories = () => {
  const [data, setData] = useState<GalleryData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<GalleryData>("/gallery/images")
      .then((res) => {
        if (res.data?.images?.length > 0) {
          cachedData = res.data;
          setData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div id="gallery-section">
      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-highlight px-3">
              AEIRC
            </h6>
            <h1 className="mb-5">{data.section_heading}</h1>
          </div>

          <div className="row g-3">
            {data.images.map((img, index) => (
              <div
                key={index}
                className={`wow zoomIn ${
                  index === 0
                    ? "col-12 col-md-8"
                    : "col-6 col-md-4"
                }`}
                data-wow-delay={`${index * 0.2}s`}
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href={img.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-fluid w-100"
                    src={img.image_url}
                    alt={img.label}
                    loading="lazy"
                    style={{ height: "260px", objectFit: "cover" }}
                  />
                  <div
                    className="bg-white text-center text-highlight position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">{img.label}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
