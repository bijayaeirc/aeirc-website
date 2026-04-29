import { instructors } from "../../data/TeamData";

const TeamSection: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            Team
          </h6>
          <h1 className="mb-5">Our Team</h1>
        </div>
        <div className="row g-4">
          {instructors.map((instructor, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={instructor.delay}
              key={index}
            >
              <div className="team-item bg-light ">
                <div className="overflow-hidden ">
                  <img
                    className="img-fluid img-container team-img-container"
                    src={instructor.image}
                    alt={instructor.name}
                  />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  {/* <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-custom mx-1" href={instructor.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-custom mx-1" href={instructor.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-custom mx-1" href={instructor.instagram}>
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-sm-square btn-custom mx-1" href={instructor.linkedin}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div> */}
                </div>
                <div className="text-center p-4 mt-2">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.designation}</small>
                  <p>{instructor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
