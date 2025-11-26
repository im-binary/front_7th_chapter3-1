import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
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

// 🚨 Bad Practice: UI 컴포넌트가 도메인 타입을 알고 있음
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    Omit<VariantProps<typeof buttonVariants>, 'variant' | 'size' | 'outline'> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;

  // 🚨 도메인 관심사 추가
  entityType?: 'user' | 'post';
  action?: 'create' | 'edit' | 'delete' | 'publish' | 'archive';
  entity?: any; // 엔티티 객체를 직접 받음
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      outline = false,
      fullWidth,
      asChild = false,
      children,
      disabled = false,
      entityType,
      action,
      entity,
      ...props
    },
    ref
  ) => {
    // 🚨 Bad Practice: UI 컴포넌트가 비즈니스 규칙을 판단함
    let actualDisabled = disabled;
    let actualVariant = variant;
    let actualChildren = children;

    if (entityType && action && entity) {
      // 비즈니스 규칙: 관리자는 삭제 불가
      if (
        entityType === 'user' &&
        action === 'delete' &&
        entity.role === 'admin'
      ) {
        actualDisabled = true;
      }

      // 비즈니스 규칙: 이미 게시된 글은 게시 버튼 비활성화
      if (
        entityType === 'post' &&
        action === 'publish' &&
        entity.status === 'published'
      ) {
        actualDisabled = true;
      }

      // 비즈니스 규칙: 게시된 글만 보관 가능
      if (
        entityType === 'post' &&
        action === 'archive' &&
        entity.status !== 'published'
      ) {
        actualDisabled = true;
      }

      // 자동 label 생성
      if (!children) {
        if (action === 'create') {
          actualChildren = `새 ${entityType === 'user' ? '사용자' : '게시글'} 만들기`;
        } else if (action === 'edit') {
          actualChildren = '수정';
        } else if (action === 'delete') {
          actualChildren = '삭제';
        } else if (action === 'publish') {
          actualChildren = '게시';
        } else if (action === 'archive') {
          actualChildren = '보관';
        }
      }

      // action에 따라 variant 자동 결정
      if (action === 'delete') {
        actualVariant = 'danger';
      } else if (action === 'publish') {
        actualVariant = 'success';
      } else if (action === 'archive') {
        actualVariant = 'secondary';
      }
    }

    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: actualVariant,
            size,
            outline,
            fullWidth,
            className,
          })
        )}
        ref={ref}
        disabled={actualDisabled}
        {...props}
      >
        {actualChildren}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
