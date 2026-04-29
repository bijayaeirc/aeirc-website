const QRVideoSection = () => {
  return (
    <section className="relative bg-[#f0f4fa] overflow-hidden py-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg
          className="w-[140%] h-[100px] flipped-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,80 C850,160 1050,50 1200,0 L1200,120 L0,120 Z"
            fill="#e9f1fc"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center mb-5">
        <h6 className="section-title">Exam Hall Experience</h6>
        <h1>See How the CBT Examination Is Conducted</h1>
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 row g-4">
        {/* Text Side - 40% */}
        <div className="w-full col-lg-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Inside Our Modern CBT Exam Halls
          </h2>
          <p className="text-gray-600 mb-6">
            Get a real look at how computer-based tests are conducted across our
            state-of-the-art facilities. From candidate verification to secure
            check-ins, QR-based lab assignments, and fully monitored exam rooms
            — our process ensures fairness, reliability, and comfort for every
            examinee.
          </p>
        </div>

        {/* Video Side - 60% */}
        <div className="w-full col-lg-7 ">
          {/* Video */}
          <div className="col-md-4 video-box">
            <div className="h-100 position-relative overflow-hidden rounded ">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster=""
                className="w-100 h-100 object-fit-cover rounded faq-img-height"
                onMouseEnter={(e) => (e.target as HTMLVideoElement).pause()}
                onMouseLeave={(e) => (e.target as HTMLVideoElement).play()}
              >
                <source src="/videos/video_Aeirc_exam.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave (unchanged) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-[calc(140%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,80 C850,160 1050,50 1200,0 L1200,120 L0,120 Z"
            fill="#e9f1fc"
          />
        </svg>
      </div>
    </section>
  );
};

export default QRVideoSection;
