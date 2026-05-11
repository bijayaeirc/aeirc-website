import { useEffect, useState } from "react";
import { instructors as fallbackInstructors } from "../../data/TeamData";
import api from "../../api/client";

interface TeamMember {
  name: string;
  designation: string;
  description: string;
  image: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

let cachedTeam: TeamMember[] | null = null;

const TeamSection: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>(
    cachedTeam ?? fallbackInstructors
  );

  useEffect(() => {
    if (cachedTeam) return;
    api
      .get<TeamMember[]>("/team/members")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          cachedTeam = res.data;
          setMembers(res.data);
        }
      })
      .catch(() => {});
  }, []);

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
          {members.map((member, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${(index % 4) * 0.2 + 0.1}s`}
              key={index}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden" style={{ height: "280px" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  {/* social links placeholder — uncomment when ready
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-custom mx-1" href={member.facebook}><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square btn-custom mx-1" href={member.twitter}><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square btn-custom mx-1" href={member.instagram}><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-sm-square btn-custom mx-1" href={member.linkedin}><i className="fab fa-linkedin"></i></a>
                  </div> */}
                </div>
                <div className="text-center p-4 mt-2">
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.designation}</small>
                  <p>{member.description}</p>
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
