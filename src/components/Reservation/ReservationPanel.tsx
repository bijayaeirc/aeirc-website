import { useState } from "react";
import axios from "axios";
import Field from "./Field";
import TimePicker from "./TimePicker";
import { EVENT_TYPES } from "../../constants/reservation";
import { submitReservation } from "../../services/reservationService";
import { validateReservationForm } from "../../utils/validators";
import { toYMD } from "../../utils/date";
import type {
  FormState,
  FormErrors,
  SuccessResult,
} from "../../types/reservation";

interface ReservationPanelProps {
  date: Date;
  onClose: () => void;
  onSuccess: (r: SuccessResult) => void;
  onDateConflict: () => void;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  start_time: "",
  end_time: "",
  event_type: "",
  guest_count: "",
  notes: "",
};

export default function ReservationPanel({
  date,
  onClose,
  onSuccess,
  onDateConflict,
}: ReservationPanelProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const set =
    (f: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((p) => ({ ...p, [f]: e.target.value }));

  const setTime = (f: "start_time" | "end_time") => (v: string) =>
    setForm((p) => ({ ...p, [f]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateReservationForm(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const data = await submitReservation({
        ...form,
        event_date: toYMD(date),
      });
      onSuccess({ id: data.reservation_id, date });
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.status === 422) {
        const mapped: FormErrors = {};
        Object.entries(
          (err.response.data.errors ?? {}) as Record<string, string[]>,
        ).forEach(([k, v]) => {
          (mapped as Record<string, string>)[k] = v[0];
        });
        if (mapped.event_date) {
          onDateConflict();
          return;
        }
        setErrors(mapped);
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  const formatted = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rf-panel">
      <div className="rf-panel-header">
        <div>
          <div className="rf-panel-eyebrow">New Reservation</div>
          <div className="rf-panel-date">{formatted}</div>
        </div>
        <button className="rf-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      <form onSubmit={submit} noValidate className="rf-form">
        {errors.general && (
          <div className="rf-error-banner">{errors.general}</div>
        )}

        <div className="rf-section-label">Contact</div>
        <div className="rf-row">
          <Field label="Full Name *" error={errors.name}>
            <input
              className={`rf-input${errors.name ? " rf-input--err" : ""}`}
              value={form.name}
              onChange={set("name")}
              placeholder="Your Name"
            />
          </Field>
          <Field label="Email *" error={errors.email}>
            <input
              className={`rf-input${errors.email ? " rf-input--err" : ""}`}
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="name@example.com"
            />
          </Field>
        </div>
        <Field label="Phone" error={errors.phone}>
          <input
            className={`rf-input${errors.phone ? " rf-input--err" : ""}`}
            value={form.phone}
            onChange={set("phone")}
            placeholder="+977 98765 43210"
          />
        </Field>

        <div className="rf-section-label">Event Details</div>
        <div className="rf-row">
          <Field label="Event Type *" error={errors.event_type}>
            <select
              className={`rf-input${errors.event_type ? " rf-input--err" : ""}`}
              value={form.event_type}
              onChange={set("event_type")}
            >
              <option value="">Select type</option>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Guests" error={errors.guest_count}>
            <input
              className={`rf-input${errors.guest_count ? " rf-input--err" : ""}`}
              type="number"
              value={form.guest_count}
              onChange={set("guest_count")}
              placeholder="50"
              min={1}
            />
          </Field>
        </div>

        <div className="rf-row">
          <Field label="Start Time *" error={errors.start_time}>
            <TimePicker
              value={form.start_time}
              onChange={setTime("start_time")}
              error={errors.start_time}
            />
          </Field>
          <Field label="End Time *" error={errors.end_time}>
            <TimePicker
              value={form.end_time}
              onChange={setTime("end_time")}
              error={errors.end_time}
            />
          </Field>
        </div>

        <Field label="Notes" error={errors.notes}>
          <textarea
            className={`rf-input rf-textarea${errors.notes ? " rf-input--err" : ""}`}
            value={form.notes}
            onChange={set("notes")}
            placeholder="Special requirements, setup preferences…"
            maxLength={350}
          />
        </Field>

        <div className="rf-form-footer">
          <button type="button" className="rf-btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="rf-btn-submit" disabled={loading}>
            {loading ? (
              <>
                <span className="rf-spinner" /> Submitting…
              </>
            ) : (
              "Submit Request →"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
