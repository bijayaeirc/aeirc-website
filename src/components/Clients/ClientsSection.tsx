import { clients } from "../../data/ClientData";

const ClientsSection = () => {
  const nationalClients = clients.filter(
    (client) => client.type_of_client === "national"
  );
  const internationalClients = clients.filter(
    (client) => client.type_of_client === "international"
  );

  return (
    <div id="client-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center text-highlight px-3">
              Our Clients
            </h6>
            <h1 className="mb-4">Our Valuable Clients</h1>
          </div>

          {/* National Clients */}
          <div className="row mb-5">
            <div className="col-lg-4">
              <h2 className="mb-3 text-highlight">Our National Clients</h2>
              <p>
                AEIRC has built a strong reputation through partnerships with
                leading national organizations. These collaborations showcase
                our commitment to excellence, adherence to protocols, and
                capability to manage high-stakes projects within the country.
              </p>
            </div>
            <div className="col-lg-8 mt-1">
              <div className="row g-3">
                {nationalClients.map((client, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-3 d-flex flex-column align-items-center justify-content-center text-center"
                  >
                    <div
                      style={{
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={client.client_logo}
                        alt={client.client_name}
                        loading="lazy"
                        className="img-fluid mb-2"
                        style={{
                          maxHeight: "100px",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <p
                      className="mt-2"
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: "1.2",
                        maxWidth: "100%",
                        wordWrap: "break-word",
                      }}
                    >
                      {client.client_name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* International Clients */}
          <div className="row">
            <div className="col-lg-4 mb-1">
              <h2 className="mb-3 text-highlight">Our International Clients</h2>
              <p>
                In addition to our national success, AEIRC has established
                impactful partnerships with renowned international institutions.
                These global alliances reflect our dedication to innovation,
                global standards, and collaborative research across borders.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {internationalClients.map((client, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-3 d-flex flex-column align-items-center justify-content-center text-center"
                  >
                    <div
                      style={{
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={client.client_logo}
                        alt={client.client_name}
                        loading="lazy"
                        className="img-fluid mb-2"
                        style={{
                          maxHeight: "100px",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <p
                      className="mt-2"
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: "1.2",
                        maxWidth: "100%",
                        wordWrap: "break-word",
                      }}
                    >
                      {client.client_name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
