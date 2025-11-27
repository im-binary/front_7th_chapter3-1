import { forwardRef, useId, type ComponentRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  FormProvider,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Label } from './label';
import { FormFieldContext, FormItemContext } from './contexts';
import { useFormField } from './useFormField';
import type {
  FormFieldProps,
  FormItemProps,
  FormLabelProps,
  FormControlProps,
  FormDescriptionProps,
  FormMessageProps,
} from './types';

const sizeStyles = {
  sm: 'text-[length:var(--font-size-sm)]',
  md: 'text-[length:var(--font-size-btn-sm)]',
  lg: 'text-[length:var(--font-size-btn-md)]',
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormFieldProps<TFieldValues, TName>
) => {
  const { name, size, error, ...controllerProps } = props;

  return (
    <FormFieldContext.Provider value={{ name, size, error }}>
      <Controller name={name} {...controllerProps} />
    </FormFieldContext.Provider>
  );
};

const FormItem = forwardRef<HTMLDivElement, FormItemProps>((props, ref) => {
  const { className, ...restProps } = props;

  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...restProps} />
    </FormItemContext.Provider>
  );
});

const FormLabel = forwardRef<
  ComponentRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>((props, ref) => {
  const { className, ...restProps } = props;
  const { size, error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(
        'block mb-[var(--spacing-sm)] text-[var(--color-gray-900)] font-[var(--font-weight-bold)]',
        sizeStyles[size || 'md'],
        error && 'text-[var(--color-danger-500)]',
        className
      )}
      htmlFor={formItemId}
      {...restProps}
    />
  );
});

const FormControl = forwardRef<ComponentRef<typeof Slot>, FormControlProps>(
  (props, ref) => {
    const { size, error, formItemId, formDescriptionId, formMessageId } =
      useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...(size && { size })}
        {...props}
      />
    );
  }
);

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  (props, ref) => {
    const { className, ...restProps } = props;
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={cn(
          'block mt-[var(--spacing-xs)] text-[var(--color-gray-600)]',
          className
        )}
        {...restProps}
      />
    );
  }
);

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props;

    const { error, size, formMessageId } = useFormField();
    const body = error
      ? typeof error === 'string'
        ? error
        : String(error?.message ?? '')
      : children;

    if (!body) {
      return null;
    }

    const isError = !!error;

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          'block mt-[var(--spacing-xs)] text-[length:var(--font-size-sm)]',
          sizeStyles[size || 'md'],
          isError
            ? 'text-[var(--color-danger-500)]'
            : 'text-[var(--color-gray-600)]',
          className
        )}
        {...restProps}
      >
        {body}
      </p>
    );
  }
);

export const Form = Object.assign(FormProvider, {
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
});
