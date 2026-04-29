import { useParams } from "react-router-dom";
import { newsData } from "../../data/NewsData";
import NewsHeader from "../../components/NewsAndNotices/NewsAndNoticesHeader";

const NewsDetails = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return <p className="text-center py-5 text-danger">News item not found.</p>;
  }

  return (
    <div>
      <NewsHeader />

      <div className="container my-5">
        <div className="row">
          {/* Left 60% Section */}
          <div className="col-md-7">
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="img-fluid mb-4 rounded shadow"
            />
          </div>

          {/* Right 40% Section */}
          <div className="col-md-5">
            {/* Optional Second Image */}
            {newsItem.secondImage && (
              <img
                src={newsItem.secondImage}
                alt="Additional visual"
                className="img-fluid mb-3 rounded"
              />
            )}

            {/* Info Section */}
            <div className="bg-custom p-3 rounded shadow-sm mb-3">
              <p>
                <strong>Published By:</strong> {newsItem.publishedBy}
              </p>
              <p>
                <strong>Published Date:</strong> {newsItem.publishedDate}
              </p>
            </div>

            {/* PDF Downloads */}
            {/* {newsItem.files.length > 0 && (
              <div className="bg-custom p-3 rounded shadow-sm">
                <h5>Download Files</h5>
                <ul className="list-unstyled">
                  {newsItem.files.map((file, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={file}
                        download
                        className="btn btn-outline-custom btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-download me-2"></i> Download PDF{" "}
                        {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
