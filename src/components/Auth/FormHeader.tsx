import React from 'react';
import { cn } from '@/lib/utils';

interface FormHeaderProps {
  className?: string;
  title: string; 
}

const FormHeader: React.FC<FormHeaderProps> = ({
  className,
  title,
}) => {
  return (
    <h1 className={cn(
      'text-xl font-bold text-center text-card-foreground',
      // mb-6 was in original requirement, but form now uses space-y-6, so direct mb might be redundant or create double spacing.
      // If specific spacing needed different from form's space-y, it can be added here.
      className 
    )}>
      {title}
    </h1>
  );
};

export default FormHeader;
