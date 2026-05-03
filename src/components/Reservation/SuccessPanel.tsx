import type { SuccessResult } from "../../types/reservation";

interface SuccessPanelProps {
  result: SuccessResult;
  onReset: () => void;
}

export default function SuccessPanel({ result, onReset }: SuccessPanelProps) {
  const formatted = result.date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rf-success-wrap">
      <div className="rf-success-icon">✓</div>
      <h2 className="rf-success-title">Request Submitted!</h2>
      <p className="rf-success-text">
        Your reservation for <strong>{formatted}</strong> has been received.
        We'll review and confirm via email within 24 hours.
      </p>
      <p className="rf-booking-id">
        Booking reference: <strong>#{result.id}</strong>
      </p>
      <button className="rf-btn-reset" onClick={onReset}>
        Book Another Date
      </button>
    </div>
  );
}
