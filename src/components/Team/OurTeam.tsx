import React from "react";

interface Instructor {
  name: string;
  title: string;
  image: string;
  delay: string;
}

const instructors: Instructor[] = [
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-1.jpg",
    delay: "0.1s",
  },
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-2.jpg",
    delay: "0.3s",
  },
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-3.jpg",
    delay: "0.5s",
  },
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-4.jpg",
    delay: "0.7s",
  },
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-2.jpg",
    delay: "0.1s",
  },
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-3.jpg",
    delay: "0.3s",
  },
  {
    name: " Name",
    title: "Designation",
    image: "img/team-4.jpg",
    delay: "0.5s",
  },
  {
    name: "Instructor Name",
    title: "Designation",
    image: "img/team-1.jpg",
    delay: "0.7s",
  },
];

const OurTeam: React.FC = () => {
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
              key={index}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={instructor.delay}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={instructor.image}
                    alt={instructor.name}
                  />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.title}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
