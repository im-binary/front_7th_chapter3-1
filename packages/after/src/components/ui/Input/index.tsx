import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { InputProps } from './types';

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
      error: {
        true: 'border-[var(--color-danger-500)]',
        false: 'border-[var(--color-gray-400)]',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type = 'text', error, ...restProps } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={cn(inputVariants({ error, className }))}
      {...restProps}
    />
  );
});

export { Input, inputVariants };
