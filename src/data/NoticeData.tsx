export interface NoticeDataItem {
  id: string;
  title: string;
  description: string;
  image: string;
  files: string[];
  publishedDate: string;
  publishedBy: string;
}

export const noticeData: NoticeDataItem[] = [
{
  id: "16th-Licensing-Examination-Notice",
  title: "Notice Regarding the 16th Licensing Examination",
  description:
    "The Nepal Health Professional Council (NHPC) has announced that the 16th Licensing Examination for postgraduate, graduate, and certificate-level programs will be conducted from 2082 Mangsir 28. The examination schedule, admit card, exam centers, and other details will be published on the official website and Facebook page of the Council.",
  image: "/img/NewsAndNotices/logo.jpg",
  files: ["/pdfs/16th_licensing_exam_notice.pdf"],
  publishedDate: "2025-11-30",
  publishedBy: "Nepal Health Professional Council",
}
,
  {
    id: "Server-Hosting",
    title: "Server Infrastructure & Hosting",
    description:
      "Our solid server infrastructure underpins secure and effective client operations. AEIRC ensures scalability and performance across hosted services.",
    image: "/img/about.jpg",
    files: ["/pdfs/server_hosting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
  {
    id: "Application-Development",
    title: "Software Application and Development",
    description:
      "AEIRC is dedicated to software development, offering custom, high-impact solutions for diverse industries with secure and scalable platforms.",
    image: "/img/about.jpg",
    files: ["/pdfs/software_development.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
  {
    id: "Infrastructure-Hosting",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC delivers comprehensive IT consulting and infrastructure services to facilitate digital transformation.",
    image: "/img/about.jpg",
    files: ["/pdfs/it_consulting.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
  {
    id: "Telemedicine-Health",
    title: "Telemedicine & Health Technology",
    description:
      "AEIRC leads in health technology and telemedicine services to expand healthcare access and improve outcomes.",
    image: "/img/about.jpg",
    files: ["/pdfs/telemedicine.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
  {
    id: "Commitment to Protocols",
    title: "Commitment to Standardized Protocols",
    description:
      "AEIRC follows rigorous protocols to ensure service quality, data security, and compliance across all operations.",
    image: "/img/about.jpg",
    files: ["/pdfs/standardized_protocols.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
  {
    id: "AI-Robotics",
    title: "AI & Robotics Education",
    description:
      "AEIRC pioneers AI and robotics education to equip learners with future-ready skills and tech awareness.",
    image: "/img/about.jpg",
    files: ["/pdfs/ai_robotics.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
  {
    id: "Research-Innovation-Capacity",
    title: "Research, Innovation & Capacity Building",
    description:
      "AEIRC is committed to fostering innovation and capacity building through extensive research initiatives.",
    image: "/img/about.jpg",
    files: ["/pdfs/research_capacity.pdf"],
    publishedDate: "2025-07-01",
    publishedBy: "AEIRC Team",
  },
];
