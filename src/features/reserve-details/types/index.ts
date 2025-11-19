export type ReservationType = "single" | "multiple" | "restaurant" | "event";

export type EventType = "Wedding" | "Birthday" | "Graduation" | "Party";
export type DecorationType =
  | "Wedding décor"
  | "Birthday décor"
  | "Graduation décor"
  | "Galaxy décor"
  | "Old Europe décor"
  | "Others";

export interface ReservationFormData {
  type: ReservationType;
  bookingDate: Date | null;
  bookingTime: string;
  bookingTimeFrom?: string;
  bookingTimeTo?: string;
  tablesNumber: number | null;
  guests: number | null;
  notes: string;
  eventType?: EventType;
  decorationType?: DecorationType;
}
