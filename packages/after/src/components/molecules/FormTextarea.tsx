import React from 'react';
import { Textarea } from '@/components/ui/TextArea';

// Textarea Component - Yet another inconsistent API
interface FormTextareaProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  rows?: number;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  disabled = false,
  error,
  helpText,
  rows = 4,
}) => {
  return (
    <div className="mb-[var(--spacing-md)]">
      {label && (
        <label
          htmlFor={name}
          className="block mb-[var(--spacing-sm)] text-[var(--color-gray-900)] text-[length:var(--font-size-btn-sm)] font-[var(--font-weight-bold)]"
        >
          {label}
          {required && (
            <span className="text-[var(--color-danger-500)]">*</span>
          )}
        </label>
      )}

      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        error={!!error}
      />

      {error && (
        <span className="block mt-[var(--spacing-xs)] text-[var(--color-danger-500)] text-[length:var(--font-size-sm)]">
          {error}
        </span>
      )}
      {helpText && !error && (
        <span className="block mt-[var(--spacing-xs)] text-[var(--color-gray-600)] text-[length:var(--font-size-sm)]">
          {helpText}
        </span>
      )}
    </div>
  );
};
