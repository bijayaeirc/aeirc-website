import { useEffect, useState } from "react";
import api from "../../api/client";

interface VideoSectionData {
  section_label: string;
  section_heading: string;
  text_heading: string;
  description: string;
  media_url: string;
  media_type: "video" | "image";
}

const fallbackData: VideoSectionData = {
  section_label: "Exam Hall Experience",
  section_heading: "See How the CBT Examination Is Conducted",
  text_heading: "Inside Our Modern CBT Exam Halls",
  description:
    "Get a real look at how computer-based tests are conducted across our state-of-the-art facilities. From candidate verification to secure check-ins, QR-based lab assignments, and fully monitored exam rooms — our process ensures fairness, reliability, and comfort for every examinee.",
  media_url: "/videos/video_Aeirc_exam.mp4",
  media_type: "video",
};

let cachedData: VideoSectionData | null = null;

const renderMedia = (data: VideoSectionData) => {
  if (data.media_type === "image") {
    return (
      <img
        src={data.media_url}
        alt={data.text_heading}
        className="w-100 rounded"
        style={{ objectFit: "cover", maxHeight: "400px" }}
      />
    );
  }

  if (/\.(mp4|webm|ogg)/i.test(data.media_url)) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        src={data.media_url}
        className="w-100 rounded"
        style={{ maxHeight: "400px", objectFit: "cover" }}
        onMouseEnter={(e) => (e.target as HTMLVideoElement).pause()}
        onMouseLeave={(e) => (e.target as HTMLVideoElement).play()}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  // YouTube / Vimeo embed
  return (
    <iframe
      src={data.media_url}
      className="w-100 rounded"
      style={{ height: "400px", border: "none" }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={data.text_heading}
    />
  );
};

const QRVideoSection = () => {
  const [data, setData] = useState<VideoSectionData>(cachedData ?? fallbackData);

  useEffect(() => {
    if (cachedData) return;
    api
      .get<VideoSectionData>("/video/data")
      .then((res) => {
        if (res.data?.media_url) {
          cachedData = res.data;
          setData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative bg-[#f0f4fa] overflow-hidden py-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg className="w-[140%] h-[100px] flipped-wave" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,80 C850,160 1050,50 1200,0 L1200,120 L0,120 Z" fill="#e9f1fc" />
        </svg>
      </div>

      <div className="text-center mb-5">
        <h6 className="section-title">{data.section_label}</h6>
        <h1>{data.section_heading}</h1>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 row g-4">
        {/* Text Side */}
        <div className="w-full col-lg-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            {data.text_heading}
          </h2>
          <p className="text-gray-600 mb-6">{data.description}</p>
        </div>

        {/* Media Side */}
        <div className="w-full col-lg-7">
          <div className="col-md-4 video-box">
            <div className="h-100 position-relative overflow-hidden rounded">
              {renderMedia(data)}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg className="relative block w-[calc(140%+1.3px)] h-[100px]" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,80 C850,160 1050,50 1200,0 L1200,120 L0,120 Z" fill="#e9f1fc" />
        </svg>
      </div>
    </section>
  );
};

export default QRVideoSection;
