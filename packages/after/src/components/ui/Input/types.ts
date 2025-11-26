import type { VariantProps } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';
import type { inputVariants } from '.';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof inputVariants> {
  type?: 'text' | 'email' | 'password' | 'number' | 'url';
}
