import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/client";

interface ContactInfoItem {
  icon: string;
  title: string;
  text: string;
}

interface PersonContact {
  name: string;
  position: string;
  phone: string;
  email: string;
}

interface ContactInfoData {
  contact_info: ContactInfoItem[];
  team_contacts: PersonContact[];
}

const fallbackContactData: ContactInfoData = {
  contact_info: [
    { icon: "fas fa-map-marker-alt", title: "Office", text: "Babarmal, Kathmandu" },
  ],
  team_contacts: [
    { name: "Mr. Vikas Bhusal", position: "Chief Executive Officer", phone: "+977 9851046500", email: "mail@vikas.com.np" },
    { name: "Mr. Bijay Shrestha", position: "Director, IT Department", phone: "+977 984-9850871", email: "it.director@aeirc.com" },
  ],
};

const generateCaptcha = () => {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

let cachedContactInfo: ContactInfoData | null = null;

const ContactSection: React.FC = () => {
  const [contactData, setContactData] = useState<ContactInfoData>(
    cachedContactInfo ?? fallbackContactData
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (cachedContactInfo) return;
    api
      .get<ContactInfoData>("/contact/data")
      .then((res) => {
        if (res.data?.team_contacts?.length > 0) {
          cachedContactInfo = res.data;
          setContactData(res.data);
        }
      })
      .catch(() => {});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (captchaInput.trim().toUpperCase() !== captchaText) {
      setStatusMessage({ type: "error", text: "Invalid CAPTCHA. Please try again." });
      setCaptchaText(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    setIsSending(true);
    try {
      await api.post("/contact/submit", formData);
      setStatusMessage({ type: "success", text: "Message sent! We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setCaptchaText(generateCaptcha());
      setCaptchaInput("");
    } catch {
      setStatusMessage({ type: "error", text: "Failed to send message. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>

        <div className="row g-4 contact-row">
          {/* Team Contacts — Left column */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="d-flex flex-column bg-gradient rounded-4 mb-5"
              style={{ background: "linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)" }}
            >
              <div className="d-flex align-items-start mb-4">
                <div className="me-3" style={{ fontSize: "2.5rem", color: "#0082be", lineHeight: 1 }} aria-hidden="true">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div style={{ color: "#0082be", fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 }}>
                  Need assistance? <br />
                  Our expert department heads are ready to help you with any
                  questions or support you need.
                </div>
              </div>

              <div className="row">
                {contactData.team_contacts.map((person, index) => (
                  <div className="col-lg-12 mb-3" key={index}>
                    <div className="p-3 h-100 bg-white rounded shadow-sm" style={{ borderLeft: "5px solid #0082be" }}>
                      <h5 className="mb-1 text-dark">{person.name}</h5>
                      <p className="mb-1 text-muted">{person.position}</p>
                      <p className="mb-1 text-muted">
                        <i className="fas fa-phone me-2 text-secondary"></i>
                        {person.phone}
                      </p>
                      <p className="mb-0">
                        <i className="fas fa-envelope me-2 text-secondary"></i>
                        <Link
                          to={`https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=Inquiry`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark text-decoration-none"
                        >
                          {person.email}
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Office Address + Google Maps — Middle column */}
          <div className="col-lg-4 col-md-6 g-4 wow fadeInUp" data-wow-delay="0.3s">
            {contactData.contact_info.map(({ icon, title, text }) => (
              <div className="d-flex align-items-center mb-4" key={title}>
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-site-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className={`${icon} text-black`}></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-black">{title}</h5>
                  <p className="mb-0">{text}</p>
                </div>
              </div>
            ))}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.85604596331!2d85.32434121132162!3d27.690843776092727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cfc621cdf5%3A0xf81f589e0bfe1f46!2sAdvance%20Education%20%26%20Innovative%20Research%20Center%20(AEIRC)!5e0!3m2!1sen!2snp!4v1749118691909!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            />
          </div>

          {/* Contact Form — Right column */}
          <div className="col-lg-4 col-md-12 py-5 contact-form wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={handleSubmit}>
              <div className="row form g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name"
                      value={formData.name} onChange={handleChange} required />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email"
                      value={formData.email} onChange={handleChange} required />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject"
                      value={formData.subject} onChange={handleChange} />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message"
                      style={{ height: "150px" }} value={formData.message} onChange={handleChange} required />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="col-12">
                  <div className="captcha-container p-3 bg-light rounded">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong className="captcha-code bg-white border px-3 py-2 rounded">
                        {captchaText}
                      </strong>
                      <button type="button" className="btn btn-custom btn-sm"
                        onClick={() => setCaptchaText(generateCaptcha())}>
                        Reload
                      </button>
                    </div>
                    <div className="form-floating">
                      <input type="text" id="captcha" className="form-control" placeholder="Enter Captcha"
                        value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
                      <label htmlFor="captcha">Enter Captcha</label>
                    </div>
                  </div>
                </div>

                <div className="col-12 btn-floating">
                  <button className="btn btn-custom w-100 py-3" type="submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>

            {statusMessage && (
              <div className={`mt-3 alert ${statusMessage.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                {statusMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
