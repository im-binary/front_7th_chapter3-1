import { forwardRef, useState } from 'react';
import { Form } from '@/components/ui/Form';
import type { InputProps } from '@/components/ui/Input/types';

interface FormInputProps
  extends Omit<InputProps, 'onChange' | 'size' | 'error'> {
  name: string;
  label?: string;
  helpText?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  onChange?: (value: string) => void;

  // 🚨 도메인 관심사 추가
  fieldType?: 'username' | 'email' | 'postTitle' | 'slug' | 'normal';
  entityType?: 'user' | 'post';
  checkBusinessRules?: boolean;
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
    size = 'md',
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

    if (fieldType === 'username') {
      if (val.length < 3) {
        setInternalError('사용자명은 3자 이상이어야 합니다');
      } else if (!/^[a-zA-Z0-9_]+$/.test(val)) {
        setInternalError('영문, 숫자, 언더스코어만 사용 가능합니다');
      } else if (val.length > 20) {
        setInternalError('사용자명은 20자 이하여야 합니다');
      }

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

    onChange?.(newValue);
    validateField(newValue);
  };

  const displayError = error || internalError;

  return (
    <Form.Field
      name={name}
      label={label}
      error={displayError}
      helpText={helpText}
      required={required}
      size={size}
    >
      <Form.Input
        ref={ref}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        {...restProps}
      />
    </Form.Field>
  );
});

FormInput.displayName = 'FormInput';

export { FormInput };
export type { FormInputProps };
