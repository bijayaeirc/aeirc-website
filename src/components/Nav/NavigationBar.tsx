import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useCurrentWeather from "../../hooks/useCurrentWeather";

const Navbar = () => {
  const { weather, loading } = useCurrentWeather(); 

  useEffect(() => {
    const topBarHeight = 45;
    const navbar = document.getElementById("main-navbar");

    const handleScroll = () => {
      if (!navbar) return;

      if (window.scrollY > topBarHeight) {
        navbar.style.top = "0px";
      } else {
        navbar.style.top = `${topBarHeight}px`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navigation-bar"
      className="nav-container"
      onClick={() => console.log("Div clicked!")}
    >
      {/* Top bar */}
      <div className="site-top-navbar w-100 d-flex justify-content-between align-items-center text-nav">
        <Link
          to="https://mail.google.com/mail/?view=cm&fs=1&to=info@aeirc.com&su=Booking%20Request"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nav text-decoration-none d-flex align-items-center"
        >
          {/* <h5>Email us at</h5> */}
          <i className="bi bi-envelope me-2"></i>
          <p>info@aeirc.com</p>
        </Link>

        <div className="d-flex align-items-center gap-3">
          {/* Weather */}
          {!loading && weather && (
            <div className="d-flex align-items-center gap-2">
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={weather.description}
                style={{ width: "30px", height: "30px" }}
              />
              <span>{weather.temp}°C</span>
            </div>
          )}
          <Link
            to="https://www.facebook.com/share/1Fg5keFa1e/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nav"
          >
            <i className="bi bi-facebook"></i>
          </Link>
          <Link
                to="https://www.linkedin.com/company/aeirc-tech/?originalSubdomain=np"
                target="_blank"
            rel="noopener noreferrer"
            className="text-nav"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container-fluid site-navbar ">
        <nav className=" navbar navbar-expand-lg m-0 p-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "navbar-brand d-flex align-items-center px-4 px-lg-5 active"
                : "navbar-brand d-flex align-items-center px-4 px-lg-5"
            }
          >
            <img
              src="/img/logo_AEIRC.png"
              alt="Logo"
              style={{ width: "120px", height: "auto" , filter:"invert(1)"}}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse m-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              {["/", "/about", "/services", "/products", "/newsandnotices", "/contact"].map(
                (path, idx) => {
                  const label = [
                    "Home",
                    "About",
                    "Services",
                    "Products",
                    "News & Notices",
                    "Contact",
                  ][idx];
                  return (
                    <NavLink
                      key={path}
                      to={path}
                      end={path === "/"}
                      className={({ isActive }) =>
                        isActive
                          ? "nav-item nav-link active"
                          : "nav-item nav-link"
                      }
                    >
                      {label}
                    </NavLink>
                  );
                }
              )}

              {/* <div className="nav-item dropdown">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"
                  }
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </NavLink>
                <div className="dropdown-menu fade-down m-0">
                  <NavLink to="/team" className="dropdown-item">
                    Our Team
                  </NavLink>
                  <NavLink to="/about" className="dropdown-item">
                    About Us
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
