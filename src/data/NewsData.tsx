export interface NewsDataItem {
  id: string;
  title: string;
  description: string;
  image: string;
  secondImage?: string; 
  files: string[];
  publishedDate: string;
  publishedBy: string;
  category: "latest" | "top" | "news";
}

export const newsData: NewsDataItem[] = [
  {
    id: "Computer-Based Test Services",
    title: "Computer-Based Test (CBT) Services",
    description:
      "AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions capable of accommodating more than 2,000 candidates per day in its three soundproof air-conditioned CBT exam labs.",
    image: "/img/about.jpg",
    secondImage: "/img/cbt2.jpg",
    files: ["/pdfs/cbt_services.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "top",
  },
  {
    id: "happy holi",
    title: "Merry Christmas And Happy New Year",
    description:
      "AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions capable of accommodating more than 2,000 candidates per day in its three soundproof air-conditioned CBT exam labs.",
    image: "/img/NewsAndNotices/Christmas.png",
    secondImage: "/img/NewsAndNotices/Christmas.png",
    files: ["/pdfs/cbt_services.pdf"],
    publishedDate: "2025-12-1",
    publishedBy: "AEIRC Team",
    category: "latest",
  },
  {
    id: "Server-Hosting",
    title: "Server Infrastructure & Hosting",
    description:
      "Our solid server infrastructure underpins secure and effective client operations. AEIRC ensures scalability and performance across hosted services.",
    image: "/img/about.jpg",
    secondImage: "/img/server.jpg",
    files: ["/pdfs/server_hosting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "top",
  },
  {
    id: "Application-Development",
    title: "Software Application and Development",
    description:
      "AEIRC is dedicated to software development, offering custom, high-impact solutions for diverse industries with secure and scalable platforms.",
    image: "/img/about.jpg",
    secondImage: "/img/software.jpg",
    files: ["/pdfs/software_development.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "news",
  },
  {
    id: "Infrastructure-Hosting",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC delivers comprehensive IT consulting and infrastructure services to facilitate digital transformation.",
    image: "/img/about.jpg",
    secondImage: "/img/infrastructure.jpg",
    files: ["/pdfs/it_consulting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "latest",
  },
  {
    id: "Infrastructure-Hosting",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC delivers comprehensive IT consulting and infrastructure services to facilitate digital transformation.",
    image: "/img/about.jpg",
    secondImage: "/img/infrastructure.jpg",
    files: ["/pdfs/it_consulting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "latest",
  },
  {
    id: "Infrastructure-Hosting",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC delivers comprehensive IT consulting and infrastructure services to facilitate digital transformation.",
    image: "/img/about.jpg",
    secondImage: "/img/infrastructure.jpg",
    files: ["/pdfs/it_consulting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "latest",
  },
  {
    id: "Infrastructure-Hosting",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC delivers comprehensive IT consulting and infrastructure services to facilitate digital transformation.",
    image: "/img/about.jpg",
    secondImage: "/img/infrastructure.jpg",
    files: ["/pdfs/it_consulting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "latest",
  },
  {
    id: "Telemedicine-Health",
    title: "Telemedicine & Health Technology",
    description:
      "AEIRC leads in health technology and telemedicine services to expand healthcare access and improve outcomes.",
    image: "/img/about.jpg",
    secondImage: "/img/telemedicine.jpg",
    files: ["/pdfs/telemedicine.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "top",
  },
  {
    id: "Commitment to Protocols",
    title: "Commitment to Standardized Protocols",
    description:
      "AEIRC follows rigorous protocols to ensure service quality, data security, and compliance across all operations.",
    image: "/img/about.jpg",
    secondImage: "/img/lab.jpg",
    files: ["/pdfs/news/Asian Paints_proposal.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "news",
  },
  {
    id: "AI-Robotics",
    title: "AI & Robotics Education",
    description:
      "AEIRC pioneers AI and robotics education to equip learners with future-ready skills and tech awareness.",
    image: "/img/about.jpg",
    secondImage: "/img/robotics.jpg",
    files: ["/pdfs/ai_robotics.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "latest",
  },
  {
    id: "Research-Innovation-Capacity",
    title: "Research, Innovation & Capacity Building",
    description:
      "AEIRC is committed to fostering innovation and capacity building through extensive research initiatives.",
    image: "/img/about.jpg",
    secondImage: "/img/research.jpg",
    files: ["/pdfs/research_capacity.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "top",
  },
  {
    id: "New-Training-Programs",
    title: "Launch of New Training Programs",
    description:
      "AEIRC is launching new training programs aimed at skill development and professional growth in emerging technologies.",
    image: "/img/about.jpg",
    files: ["/pdfs/training_programs.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
    category: "news",
  },
];
