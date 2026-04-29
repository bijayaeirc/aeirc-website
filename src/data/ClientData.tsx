export type ClientType = "national" | "international";

export interface Client {
  client_name: string;
  client_logo: string;
  type_of_client: ClientType;
}

export const clients: Client[] = [
  // National Clients
  {
    client_name: "Nepal Health Professional Council (NHPC)",
    client_logo: "/img/partners/national/NHPC1.png",
    type_of_client: "national",
  },
  {
    client_name: "Health Insurance Board of Nepal",
    client_logo: "/img/partners/national/HIBN.png",
    type_of_client: "national",
  },
  {
    client_name: "Nepalinstitute",
    client_logo: "/img/partners/national/Nepalinstitute1.png",
    type_of_client: "national",
  },
  {
    client_name: "PI Academy",
    client_logo: "/img/partners/national/PI_Academy-removebg-preview.png",
    type_of_client: "national",
  },
  {
    client_name: "Nepal Pharmacy Council",
    client_logo: "/img/partners/national/NPC1.png",
    type_of_client: "national",
  },

  // International Clients
  {
    client_name: "British Council",
    client_logo: "/img/partners/international/BritishCouncil.png",
    type_of_client: "international",
  },
  {
    client_name: "City & Guilds (UK)",
    client_logo: "/img/partners/international/CG.png",
    type_of_client: "international",
  },
  {
    client_name: "Core Integra (India)",
    client_logo: "/img/partners/international/CoreIntegra.png",
    type_of_client: "international",
  },
  {
    client_name: "JOT (Japan)",
    client_logo: "/img/partners/international/jot.png",
    type_of_client: "international",
  },
  {
    client_name: "NTA (India) – JEE Main and JEE Advanced",
    client_logo: "/img/partners/international/NTA.png",
    type_of_client: "international",
  },
  {
    client_name: "TCS iON (Tata Consultancy Services, India)",
    client_logo: "/img/partners/international/TCS.png",
    type_of_client: "international",
  },
];
