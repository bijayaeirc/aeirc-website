const EmailOptions = () => {
  const email = "queenweiwei4@gmail.com";
  const subject = "Booking Request";

  const emailLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
    outlook: `https://outlook.live.com/mail/deeplink/compose?to=${email}&subject=${subject}`,
    yahoo: `http://compose.mail.yahoo.com/?to=${email}&subj=${subject}`,
  };

  return (
    <div className="dropdown px-0 my-auto ">
      <button
        className="btn btn-primary dropdown-toggle 
                   py-2 px-4 py-lg-3 px-lg-5 btn-sm "
        style={{ minWidth: "150px", maxWidth: "200px" }}
        type="button"
        id="bookNowDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Book Now
      </button>

      <ul
        className="dropdown-menu w-100 text-left"
        aria-labelledby="bookNowDropdown"
      >
        <li>
          <a
            className="dropdown-item"
            href={emailLinks.gmail}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href={emailLinks.outlook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Outlook
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href={emailLinks.yahoo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Yahoo Mail
          </a>
        </li>
      </ul>
    </div>
  );
};

export default EmailOptions;
