import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, useState, type InputHTMLAttributes } from 'react';

const inputVariants = cva(
  [
    // Base styles
    'w-full',
    'px-[var(--spacing-sm)]',
    'py-[var(--spacing-sm)]',
    'text-[length:var(--font-size-btn-md)]',
    'text-[var(--color-text-primary)]',
    'border',
    'rounded-[3px]',
    'bg-[var(--color-bg-primary)]',
    'box-border',
    'transition-colors',
    // Focus state
    'focus:border-[var(--color-primary-500)]',
    'focus:outline-none',
    // Disabled state
    'disabled:bg-[var(--color-secondary-100)]',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      width: {
        small: 'max-w-[200px]',
        medium: 'max-w-[300px]',
        large: 'max-w-[400px]',
        full: 'w-full',
      },
      hasError: {
        true: 'border-[var(--color-danger-500)]',
        false: 'border-[var(--color-gray-400)]',
      },
    },
    defaultVariants: {
      width: 'full',
      hasError: false,
    },
  }
);

interface FormInputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'onChange' | 'type' | 'width'
    >,
    Omit<VariantProps<typeof inputVariants>, 'hasError'> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'url';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  width?: 'small' | 'medium' | 'large' | 'full';

  // 🚨 도메인 관심사 추가
  fieldType?: 'username' | 'email' | 'postTitle' | 'slug' | 'normal';
  entityType?: 'user' | 'post'; // 엔티티 타입까지 알고 있음
  checkBusinessRules?: boolean; // 비즈니스 규칙 검사 여부
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const {
    name,
    value,
    onChange,
    label,
    type = 'text',
    placeholder,
    required = false,
    disabled = false,
    error,
    helpText,
    width = 'full',
    className,
    fieldType = 'normal',
    entityType,
    checkBusinessRules = false,
    ...restProps
  } = props;

  const [internalError, setInternalError] = useState('');

  // 🚨 Bad Practice: UI 컴포넌트가 비즈니스 규칙을 검증함
  const validateField = (val: string) => {
    setInternalError('');

    if (!val) return;

    // 기본 필드 타입 검증
    if (fieldType === 'username') {
      if (val.length < 3) {
        setInternalError('사용자명은 3자 이상이어야 합니다');
      } else if (!/^[a-zA-Z0-9_]+$/.test(val)) {
        setInternalError('영문, 숫자, 언더스코어만 사용 가능합니다');
      } else if (val.length > 20) {
        setInternalError('사용자명은 20자 이하여야 합니다');
      }

      // 🚨 도메인 특화 검증: 예약어 체크
      if (checkBusinessRules) {
        const reservedWords = ['admin', 'root', 'system', 'administrator'];
        if (reservedWords.includes(val.toLowerCase())) {
          setInternalError('예약된 사용자명입니다');
        }
      }
    } else if (fieldType === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setInternalError('올바른 이메일 형식이 아닙니다');
      }

      // 🚨 비즈니스 규칙: User 엔티티의 이메일은 회사 도메인만
      if (checkBusinessRules && entityType === 'user') {
        if (!val.endsWith('@company.com') && !val.endsWith('@example.com')) {
          setInternalError(
            '회사 이메일(@company.com 또는 @example.com)만 사용 가능합니다'
          );
        }
      }
    } else if (fieldType === 'postTitle') {
      if (val.length < 5) {
        setInternalError('제목은 5자 이상이어야 합니다');
      } else if (val.length > 100) {
        setInternalError('제목은 100자 이하여야 합니다');
      }

      // 🚨 비즈니스 규칙: 금칙어 체크
      if (checkBusinessRules && entityType === 'post') {
        const bannedWords = ['광고', '스팸', '홍보'];
        const hasBannedWord = bannedWords.some((word) => val.includes(word));
        if (hasBannedWord) {
          setInternalError('제목에 금지된 단어가 포함되어 있습니다');
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    validateField(newValue);
  };

  const displayError = error || internalError;

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

      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={cn(
          inputVariants({ width, hasError: !!displayError, className })
        )}
        {...restProps}
      />

      {displayError && (
        <span className="block mt-[var(--spacing-xs)] text-[var(--color-danger-500)] text-[length:var(--font-size-sm)]">
          {displayError}
        </span>
      )}
      {helpText && !displayError && (
        <span className="block mt-[var(--spacing-xs)] text-[var(--color-gray-600)] text-[length:var(--font-size-sm)]">
          {helpText}
        </span>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export { FormInput, inputVariants };
export type { FormInputProps };
