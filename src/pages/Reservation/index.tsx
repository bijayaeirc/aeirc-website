import { useState } from "react";
import ReservationForm from "../../components/Reservation/ReservationForm";
import TermsPopup from "../../components/Legal/TermsAndConditions/TermsPopup";

const TERMS_KEY = "aeirc_terms_accepted";

export default function ReservationPage() {
  const [termsAccepted, setTermsAccepted] = useState(
    () => localStorage.getItem(TERMS_KEY) === "true"
  );

  const handleAccept = () => {
    localStorage.setItem(TERMS_KEY, "true");
    setTermsAccepted(true);
  };

  return (
    <div id="reservation-page">
      <TermsPopup show={!termsAccepted} onClose={handleAccept} />
      {termsAccepted && <ReservationForm />}
    </div>
  );
}
