import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/client";

interface PageBannerProps {
  pageKey: string;
  title: string;
  breadcrumb: string;
}

interface BannerData {
  image_url: string;
  title?: string;
}

const bannerCache = new Map<string, BannerData>();

const PageBanner: React.FC<PageBannerProps> = ({ pageKey, title, breadcrumb }) => {
  const [data, setData] = useState<BannerData | null>(bannerCache.get(pageKey) ?? null);

  useEffect(() => {
    if (bannerCache.has(pageKey)) return;
    api
      .get<BannerData>(`/banner/page/${pageKey}`)
      .then((res) => {
        if (res.data?.image_url) {
          bannerCache.set(pageKey, res.data);
          setData(res.data);
        }
      })
      .catch(() => {});
  }, [pageKey]);

  const overlay = "linear-gradient(rgba(15, 20, 40, 0.82), rgba(15, 20, 40, 0.70))";

  const bgStyle = data?.image_url
    ? {
        backgroundImage: `${overlay}, url(${data.image_url})`,
        backgroundPosition: "center" as const,
        backgroundRepeat: "no-repeat" as const,
        backgroundSize: "cover" as const,
      }
    : {
        backgroundImage: overlay,
        backgroundColor: "#181d38",
      };

  return (
    <div className="container-fluid py-5 mb-5 page-header" style={bgStyle}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              {data?.title ?? title}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link className="text-white" to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  {breadcrumb}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
