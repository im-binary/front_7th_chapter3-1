import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import type { TextareaProps } from './types';

export const textareaVariants = cva(
  [
    // Base styles
    'w-full',
    'min-h-[6em]',
    'px-[var(--spacing-md)]',
    'py-[var(--spacing-md)]',
    'text-[length:var(--font-size-lg)]',
    'text-[var(--color-text-primary)]',
    'font-[var(--font-weight-normal)]',
    'leading-[var(--line-height-tight)]',
    'border',
    'rounded-[4px]',
    'bg-[var(--color-bg-primary)]',
    'box-border',
    'transition-[border-color]',
    'duration-[var(--transition-duration-base)]',
    'ease-[var(--transition-ease-out)]',
    'resize-vertical',
    'outline-none',
    // Focus state
    'focus:border-[var(--color-primary-500)]',
    'focus:border-2',
    'focus:px-[calc(var(--spacing-md)-1px)]',
    'focus:py-[calc(var(--spacing-md)-1px)]',
    // Disabled state
    'disabled:bg-[var(--color-text-disabled)]',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      error: {
        true: 'border-[var(--color-danger-500)]',
        false: 'border-[var(--color-border-strong)]',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ value, onChange, className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ error, className }))}
        ref={ref}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  }
);
