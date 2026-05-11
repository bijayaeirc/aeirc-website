import { useEffect, useState } from "react";
import api from "../../api/client";
import { clients as fallbackClients } from "../../data/ClientData";

interface ClientItem {
  client_name: string;
  client_logo: string;
}

interface ClientGroupData {
  title: string;
  description: string;
  clients: ClientItem[];
}

interface ClientsData {
  section_title: string;
  national: ClientGroupData;
  international: ClientGroupData;
}

const fallbackData: ClientsData = {
  section_title: "Our Valuable Clients",
  national: {
    title: "Our National Clients",
    description:
      "AEIRC has built a strong reputation through partnerships with leading national organizations. These collaborations showcase our commitment to excellence, adherence to protocols, and capability to manage high-stakes projects within the country.",
    clients: fallbackClients.filter((c) => c.type_of_client === "national"),
  },
  international: {
    title: "Our International Clients",
    description:
      "In addition to our national success, AEIRC has established impactful partnerships with renowned international institutions. These global alliances reflect our dedication to innovation, global standards, and collaborative research across borders.",
    clients: fallbackClients.filter((c) => c.type_of_client === "international"),
  },
};

let cachedData: ClientsData | null = null;

const ClientGroup = ({ group }: { group: ClientGroupData }) => (
  <div className="row mb-5">
    <div className="col-lg-4">
      <h2 className="mb-3 text-highlight">{group.title}</h2>
      <p>{group.description}</p>
    </div>
    <div className="col-lg-8 mt-1">
      <div className="row g-3">
        {group.clients.map((client: ClientItem, index: number) => (
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
);

const ClientsSection = () => {
  const [data, setData] = useState<ClientsData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<ClientsData>("/clients/data")
      .then((res) => {
        const d = res.data;
        if (d?.national && d?.international && d?.section_title) {
          cachedData = d;
          setData(d);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div id="client-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center text-highlight px-3">
              Our Clients
            </h6>
            <h1 className="mb-4">{data.section_title}</h1>
          </div>
          <ClientGroup group={data.national} />
          <ClientGroup group={data.international} />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
