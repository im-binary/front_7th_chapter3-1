import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectRootProps extends SelectPrimitive.SelectProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
  error?: boolean;
}

export interface SelectScrollUpButtonProps
  extends SelectPrimitive.SelectScrollUpButtonProps {}

export interface SelectScrollDownButtonProps
  extends SelectPrimitive.SelectScrollDownButtonProps {}

export interface SelectProps extends SelectPrimitive.SelectProps {}

export interface SelectContentProps extends SelectPrimitive.SelectContentProps {
  container?: HTMLElement;
}

export interface SelectItemProps extends SelectPrimitive.SelectItemProps {}
