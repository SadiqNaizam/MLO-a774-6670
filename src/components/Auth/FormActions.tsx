import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface FormActionsProps {
  className?: string;
  onSignUp?: () => void;
  isSubmitting?: boolean;
}

const FormActions: React.FC<FormActionsProps> = ({
  className,
  onSignUp,
  isSubmitting = false,
}) => {
  const buttonBaseStyles = "w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className={cn('flex flex-col items-center gap-4 w-full', className)}>
      <Button
        type="submit"
        variant="default"
        className={cn(
          buttonBaseStyles,
          "bg-primary text-primary-foreground hover:bg-action-hover"
        )}
        disabled={isSubmitting}
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Logging in...' : 'Log in'}
      </Button>
      <Button
        type="button"
        variant="link"
        className="text-sm text-muted-foreground hover:text-primary"
        onClick={onSignUp}
        disabled={isSubmitting}
      >
        or, sign up
      </Button>
    </div>
  );
};

export default FormActions;
