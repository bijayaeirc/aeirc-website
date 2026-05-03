interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export default function Field({ label, error, children }: FieldProps) {
  return (
    <div className="rf-field">
      <label className="rf-label">{label}</label>
      {children}
      {error && <span className="rf-field-error">{error}</span>}
    </div>
  );
}
