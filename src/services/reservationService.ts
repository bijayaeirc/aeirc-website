import api from "../api/client";
import type { ReservationPayload } from "../types/reservation";

export async function fetchBookedDates(): Promise<string[]> {
  const res = await api.get("/reservation/booked-dates");
  return res.data.dates ?? [];
}

export async function submitReservation(
  payload: ReservationPayload,
): Promise<{ reservation_id: string | number }> {
  const res = await api.post("/reservation", payload);
  return res.data;
}
