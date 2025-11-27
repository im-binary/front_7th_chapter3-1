import type * as React from 'react';
import type * as LabelPrimitive from '@radix-ui/react-label';
import type { Slot } from '@radix-ui/react-slot';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName> & {
  size?: 'sm' | 'md' | 'lg';
  error?: string;
};

export type FormItemProps = React.HTMLAttributes<HTMLDivElement>;

export type FormLabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;

export type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot>;

export type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;
