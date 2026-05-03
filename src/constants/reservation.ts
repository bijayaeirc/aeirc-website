export const EVENT_TYPES = [
  "Conference",
  "Workshop",
  "Examination",
  "Other",
] as const;

export const HOURS_12 = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

export const MINUTES = ["00", "15", "30", "45"];
