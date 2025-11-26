import React from 'react';
import { Select } from '../ui/Select';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  (props, ref) => {
    const {
      name,
      value,
      onChange,
      options,
      label,
      placeholder = 'Select an option...',
      required = false,
      disabled = false,
      error,
      helpText,
      size = 'md',
    } = props;

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

        <Select
          value={value}
          onValueChange={onChange}
          disabled={disabled}
          size={size}
        >
          <Select.Trigger
            ref={ref}
            id={name}
            error={!!error}
            disabled={disabled}
          >
            <Select.Value placeholder={placeholder} />
          </Select.Trigger>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>

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
  }
);
