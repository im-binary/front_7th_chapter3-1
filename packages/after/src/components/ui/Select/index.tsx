import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type {
  SelectContentProps,
  SelectItemProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectTriggerProps,
  SelectRootProps,
} from './types';
import { SelectProvider, useSelectContext } from './contexts';

const selectTriggerVariants = cva(
  [
    'flex',
    'w-full',
    'items-center',
    'justify-between',
    'whitespace-nowrap',
    'rounded-[3px]',
    'border',
    'bg-[var(--color-bg-primary)]',
    'text-[length:var(--font-size-btn-md)]',
    'text-[var(--color-text-primary)]',
    'shadow-sm',
    'box-border',
    'ring-offset-background',
    'data-[placeholder]:text-muted-foreground',
    'focus:outline-none',
    'focus:ring-0',
    'focus:border-[var(--color-primary-500)]',
    'disabled:cursor-not-allowed',
    'disabled:bg-[var(--color-secondary-100)]',
    '[&>span]:line-clamp-1',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-8',
          'px-[var(--spacing-sm)]',
          'py-[var(--spacing-sm)]',
          'text-[length:var(--font-size-btn-sm)]',
        ],
        md: [
          'h-9',
          'px-[var(--spacing-sm)]',
          'py-[var(--spacing-sm)]',
          'text-[length:var(--font-size-btn-md)]',
        ],
        lg: [
          'h-10',
          'px-[var(--spacing-sm)]',
          'py-[var(--spacing-sm)]',
          'text-[length:var(--font-size-btn-lg)]',
        ],
      },
      error: {
        true: 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)]',
        false: 'border-[var(--color-gray-400)]',
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
    },
  }
);

const selectContentVariants = cva(
  [
    'relative',
    'z-[var(--z-index-popover)]',
    'max-h-[--radix-select-content-available-height]',
    'min-w-[8rem]',
    'overflow-y-auto',
    'overflow-x-hidden',
    'rounded-md',
    'border',
    'bg-[var(--color-white)]',
    'text-popover-foreground',
    'shadow-md',
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95',
    'data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
    'origin-[--radix-select-content-transform-origin]',
  ],
  {
    variants: {
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const selectItemVariants = cva(
  [
    'relative',
    'flex',
    'w-full',
    'cursor-default',
    'select-none',
    'items-center',
    'rounded-sm',
    'outline-none',
    'focus:bg-accent',
    'focus:text-accent-foreground',
    'data-[disabled]:pointer-events-none',
    'data-[disabled]:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: ['py-1', 'pl-2', 'pr-6', 'text-xs'],
        md: ['py-1.5', 'pl-2', 'pr-8', 'text-sm'],
        lg: ['py-2', 'pl-3', 'pr-10', 'text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const SelectRoot = (props: SelectRootProps) => {
  const { size = 'md', ...restProps } = props;

  return (
    <SelectProvider size={size}>
      <SelectPrimitive.Root {...restProps} />
    </SelectProvider>
  );
};

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (props, ref) => {
    const { className, children, error, ...restProps } = props;
    const { size } = useSelectContext('Select.Trigger');

    return (
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(selectTriggerVariants({ size, error, className }))}
        {...restProps}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );
  }
);
const SelectScrollUpButton = forwardRef<
  HTMLDivElement,
  SelectScrollUpButtonProps
>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...restProps}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  );
});

const SelectScrollDownButton = forwardRef<
  HTMLDivElement,
  SelectScrollDownButtonProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  (props, ref) => {
    const {
      className,
      children,
      position = 'popper',
      container,
      ...restProps
    } = props;
    const { size } = useSelectContext('Select.Content');

    return (
      <SelectPrimitive.Portal container={container}>
        <SelectPrimitive.Content
          ref={ref}
          position={position}
          className={cn(
            selectContentVariants({ size }),
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          {...restProps}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { className, children, ...restProps } = props;
  const { size } = useSelectContext('SelectItem');
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(selectItemVariants({ size, className }))}
      {...restProps}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
  Group: SelectPrimitive.Group,
  Value: SelectPrimitive.Value,
});
