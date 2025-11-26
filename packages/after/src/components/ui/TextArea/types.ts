import type { VariantProps } from 'class-variance-authority';
import type { textareaVariants } from './index';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}
