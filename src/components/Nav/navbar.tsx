import { Link } from "react-router-dom";
// import EmailOptions from "./EmailOptions";

const Navbar = () => {
  return (
    <div className="container py-2 py-lg-3" >
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img
        src="/img/logo_AEIRC.png" 
        alt="Logo"
        style={{ width: "120px", height: "auto" }} // Customize size
      />
          {/* <h2 className="m-0 text-highlight">
            <i className="fa fa-book me-3"></i>AEIRC
          </h2> */}
        </Link>

        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/exam" className="nav-item nav-link">
              ExamLabs
            </Link>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/404" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>

            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
            {/* <EmailOptions/> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
