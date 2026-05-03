export interface FormState {
  name: string;
  email: string;
  phone: string;
  start_time: string;
  end_time: string;
  event_type: string;
  guest_count: string;
  notes: string;
}

export type FormErrors = Partial<
  Record<keyof FormState | "general" | "event_date", string>
>;

export interface ReservationPayload extends FormState {
  event_date: string;
}

export interface SuccessResult {
  id: string | number;
  date: Date;
}
