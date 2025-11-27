import { createContext } from 'react';
import { type FieldValues, type FieldPath } from 'react-hook-form';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(
  null
);

type FormItemContextValue = {
  id: string;
};

export const FormItemContext = createContext<FormItemContextValue | null>(null);
