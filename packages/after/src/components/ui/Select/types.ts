import * as SelectPrimitive from '@radix-ui/react-select';

/**
 * Select 루트 컴포넌트의 Props
 */
export interface SelectRootProps extends SelectPrimitive.SelectProps {
  /**
   * Select의 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Select Trigger 컴포넌트의 Props
 */
export interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
  /**
   * 에러 상태 표시
   * @default false
   */
  error?: boolean;
}

export interface SelectScrollUpButtonProps
  extends SelectPrimitive.SelectScrollUpButtonProps {}

export interface SelectScrollDownButtonProps
  extends SelectPrimitive.SelectScrollDownButtonProps {}

export interface SelectProps extends SelectPrimitive.SelectProps {}

/**
 * Select Content (드롭다운) 컴포넌트의 Props
 */
export interface SelectContentProps extends SelectPrimitive.SelectContentProps {
  /**
   * 드롭다운이 렌더링될 컨테이너
   */
  container?: HTMLElement;
}

/**
 * Select Item (옵션) 컴포넌트의 Props
 */
export interface SelectItemProps extends SelectPrimitive.SelectItemProps {}
