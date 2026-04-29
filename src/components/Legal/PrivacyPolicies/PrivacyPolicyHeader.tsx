import React from "react";

const PrivacyPolicyHeader: React.FC = () => {
  return (
    <div className="container-fluid bg-site-primary
 py-5 mb-5 page-header product">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Privacy Policy - AEIRC </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Privacy Policies
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyHeader;
