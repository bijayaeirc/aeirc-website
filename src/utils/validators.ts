import type { FormState, FormErrors } from "../types/reservation";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateReservationForm(form: FormState): FormErrors {
  const e: FormErrors = {};

  if (!form.name.trim()) e.name = "Required";

  if (!form.email.trim()) {
    e.email = "Required";
  } else if (!EMAIL_RE.test(form.email)) {
    e.email = "Enter a valid email (e.g. name@example.com)";
  }

  if (!form.event_type) e.event_type = "Select an event type";
  if (!form.start_time) e.start_time = "Required";
  if (!form.end_time)   e.end_time   = "Required";

  if (form.start_time && form.end_time && form.end_time <= form.start_time)
    e.end_time = "Must be after start time";

  return e;
}
