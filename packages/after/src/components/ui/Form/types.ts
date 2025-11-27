import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
import type { InputProps } from '../Input/types';
import type { SelectProps } from '../Select/types';
import type { TextareaProps } from '../TextArea/types';

export interface FormFieldProps {
  name: string;
  label?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export interface FormInputProps extends Omit<InputProps, 'size' | 'error'> {}

export interface FormSelectProps extends Omit<SelectProps, 'size' | 'error'> {
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export interface FormTextareaProps extends Omit<TextareaProps, 'error'> {}

export interface FormDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface FormMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {}
