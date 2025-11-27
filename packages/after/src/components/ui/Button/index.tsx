import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import type { ButtonProps } from './types';

export const buttonVariants = cva(
  [
    'inline-block',
    'rounded-[3px]',
    'cursor-pointer',
    'whitespace-nowrap',
    'disabled:opacity-60',
    'disabled:cursor-not-allowed',
    'border',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--color-primary-500)]',
          'text-[var(--color-white)]',
          'border-[var(--color-primary-600)]',
          'hover:bg-[var(--color-primary-600)]',
        ],
        secondary: [
          'bg-[var(--color-secondary-100)]',
          'text-[var(--color-gray-900)]',
          'border-[var(--color-secondary-300)]',
          'hover:bg-[var(--color-secondary-200)]',
        ],
        danger: [
          'bg-[var(--color-danger-500)]',
          'text-[var(--color-white)]',
          'border-[var(--color-danger-600)]',
          'hover:bg-[var(--color-danger-600)]',
        ],
        success: [
          'bg-[var(--color-success-500)]',
          'text-[var(--color-white)]',
          'border-[var(--color-success-600)]',
          'hover:bg-[var(--color-success-600)]',
        ],
      },
      size: {
        sm: [
          'px-[var(--spacing-md)]',
          'py-[var(--spacing-sm)]',
          'text-[length:var(--font-size-btn-sm)]',
        ],
        md: [
          'px-[var(--spacing-lg)]',
          'py-[var(--spacing-sm)]',
          'text-[length:var(--font-size-btn-md)]',
        ],
        lg: [
          'px-[var(--spacing-lg)]',
          'py-[var(--spacing-md)]',
          'text-[length:var(--font-size-btn-lg)]',
        ],
      },
      outline: {
        true: 'bg-transparent',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        outline: true,
        class: [
          'text-[var(--color-primary-500)]',
          'border-[var(--color-primary-500)]',
          'hover:bg-[var(--color-primary-50)]',
        ],
      },
      {
        variant: 'secondary',
        outline: true,
        class: [
          'text-[var(--color-gray-700)]',
          'border-[var(--color-secondary-300)]',
          'hover:bg-[var(--color-secondary-50)]',
        ],
      },
      {
        variant: 'danger',
        outline: true,
        class: [
          'text-[var(--color-danger-500)]',
          'border-[var(--color-danger-500)]',
          'hover:bg-[var(--color-danger-50)]',
        ],
      },
      {
        variant: 'success',
        outline: true,
        class: [
          'text-[var(--color-success-500)]',
          'border-[var(--color-success-500)]',
          'hover:bg-[var(--color-success-50)]',
        ],
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      outline: false,
    },
  }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      size = 'md',
      outline = false,
      fullWidth,
      asChild = false,
      children,
      disabled = false,
      ...restProps
    } = props;

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            outline,
            fullWidth,
            className,
          })
        )}
        ref={ref}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
