import { useState } from "react";
import { HOURS_12, MINUTES } from "../../constants/reservation";

interface TimePickerProps {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export default function TimePicker({ value, onChange, error }: TimePickerProps) {
  const [hour, setHour] = useState(() => {
    if (!value) return "";
    const h = parseInt(value.split(":")[0], 10);
    return String(h === 0 ? 12 : h > 12 ? h - 12 : h).padStart(2, "0");
  });
  const [minute, setMinute] = useState(() => (value ? value.split(":")[1] : ""));
  const [ampm, setAmpm] = useState<"AM" | "PM">(() =>
    value && parseInt(value.split(":")[0], 10) >= 12 ? "PM" : "AM",
  );

  const emit = (h: string, m: string, ap: "AM" | "PM") => {
    if (!h || !m) { onChange(""); return; }
    let h24 = parseInt(h, 10);
    if (ap === "AM" && h24 === 12) h24 = 0;
    if (ap === "PM" && h24 !== 12) h24 += 12;
    onChange(`${String(h24).padStart(2, "0")}:${m}`);
  };

  return (
    <div className="tp-wrap">
      <select
        className={`rf-input tp-select${error ? " rf-input--err" : ""}`}
        value={hour}
        onChange={(e) => { setHour(e.target.value); emit(e.target.value, minute, ampm); }}
      >
        <option value="">HH</option>
        {HOURS_12.map((h) => <option key={h} value={h}>{h}</option>)}
      </select>

      <span className="tp-colon">:</span>

      <select
        className={`rf-input tp-select${error ? " rf-input--err" : ""}`}
        value={minute}
        onChange={(e) => { setMinute(e.target.value); emit(hour, e.target.value, ampm); }}
      >
        <option value="">MM</option>
        {MINUTES.map((m) => <option key={m} value={m}>{m}</option>)}
      </select>

      <button
        type="button"
        className={`tp-ampm tp-ampm--${ampm.toLowerCase()}`}
        onClick={() => {
          const next: "AM" | "PM" = ampm === "AM" ? "PM" : "AM";
          setAmpm(next);
          emit(hour, minute, next);
        }}
      >
        {ampm}
      </button>
    </div>
  );
}
