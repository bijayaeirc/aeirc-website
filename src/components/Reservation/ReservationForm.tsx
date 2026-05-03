import { useState, useEffect, useCallback, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./ReservationForm.css";
import ReservationPanel from "./ReservationPanel";
import SuccessPanel from "./SuccessPanel";
import { fetchBookedDates } from "../../services/reservationService";
import type { SuccessResult } from "../../types/reservation";

export default function ReservationForm() {
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [loadingDates, setLoadingDates] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [success, setSuccess] = useState<SuccessResult | null>(null);
  const [dateConflict, setDateConflict] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const loadBookedDates = useCallback(async () => {
    setLoadingDates(true);
    try {
      setBookedDates(await fetchBookedDates());
    } catch {
      setBookedDates([]);
    } finally {
      setLoadingDates(false);
    }
  }, []);

  useEffect(() => { loadBookedDates(); }, [loadBookedDates]);

  // Scroll to the form panel when it appears below the viewport (mobile stacked layout)
  useEffect(() => {
    if (!formRef.current || !(selectedDate || success)) return;
    const rect = formRef.current.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedDate, success]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endMonth = new Date(today.getFullYear() + 2, 11, 31);
  const bookedDateObjects = bookedDates.map((d) => new Date(`${d}T00:00:00`));
  const showPanel = !!(success || selectedDate);

  const handleSelect = (date?: Date) => {
    if (!date) return;
    setSelectedDate(date);
    setSuccess(null);
  };

  const handleSuccess = (result: SuccessResult) => {
    setSuccess(result);
    setSelectedDate(undefined);
    loadBookedDates();
  };

  const handleDateConflict = () => {
    setSelectedDate(undefined);
    setDateConflict("That date was just reserved by someone else. Please pick another.");
    loadBookedDates();
  };

  const handleReset = () => {
    setSuccess(null);
    setSelectedDate(undefined);
  };

  return (
    <div className="rf-root">

      {/* ── Calendar side ── */}
      <div className="rf-left">
        <div className="rf-brand">Reservation</div>
        <h1 className="rf-heading">Book your event</h1>
        <p className="rf-subheading">
          Select an available date to begin your reservation request.
          Greyed-out dates are already reserved.
        </p>

        {dateConflict && (
          <div className="rf-date-conflict" role="alert">
            <span>⚠</span> {dateConflict}
            <button
              className="rf-date-conflict-dismiss"
              onClick={() => setDateConflict(null)}
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        {loadingDates ? (
          <div className="rf-loading">Loading availability…</div>
        ) : (
          <>
            <div className="rdp-theme-wrap">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleSelect}
                captionLayout="dropdown"
                startMonth={today}
                endMonth={endMonth}
                disabled={[{ before: today }, ...bookedDateObjects]}
                modifiers={{ booked: bookedDateObjects }}
                modifiersClassNames={{ booked: "rdp-day--booked" }}
                showOutsideDays={false}
              />
            </div>

            <div className="rf-legend">
              <span className="rf-legend-item"><span className="rf-legend-dot rf-legend-dot--available" />Available</span>
              <span className="rf-legend-item"><span className="rf-legend-dot rf-legend-dot--reserved" />Reserved</span>
              <span className="rf-legend-item"><span className="rf-legend-dot rf-legend-dot--today" />Today</span>
              <span className="rf-legend-item"><span className="rf-legend-dot rf-legend-dot--selected" />Selected</span>
            </div>
          </>
        )}
      </div>

      {/* ── Form / Success side ── */}
      <div
        ref={formRef}
        className={`rf-right${!showPanel ? " rf-right--hidden-mobile" : ""}`}
      >
        {success ? (
          <SuccessPanel result={success} onReset={handleReset} />
        ) : selectedDate ? (
          <ReservationPanel
            date={selectedDate}
            onClose={() => setSelectedDate(undefined)}
            onSuccess={handleSuccess}
            onDateConflict={handleDateConflict}
          />
        ) : (
          <div className="rf-empty-state">
            <div className="rf-empty-icon">📅</div>
            <p className="rf-empty-title">Select a date</p>
            <p className="rf-empty-text">
              Click any available date on the calendar to open the reservation form.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
