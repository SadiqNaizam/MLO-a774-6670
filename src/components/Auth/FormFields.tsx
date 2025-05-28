import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';

export interface LoginFormInputs {
  username: string;
  password: string;
}

interface FormFieldsProps {
  className?: string;
}

const FormFields: React.FC<FormFieldsProps> = ({ className }) => {
  const { register, formState: { errors } } = useFormContext<LoginFormInputs>();

  const inputStyles = "bg-card p-4 rounded-md border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const errorTextStyles = "text-xs text-destructive mt-1";

  return (
    <div className={cn('flex flex-col gap-4 w-full', className)}>
      <div>
        <Label htmlFor="username" className="sr-only">Username</Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          {...register('username')}
          className={cn(inputStyles, errors.username && "border-destructive focus:ring-destructive")}
          aria-invalid={errors.username ? "true" : "false"}
        />
        {errors.username && <p className={errorTextStyles}>{errors.username.message}</p>}
      </div>
      <div>
        <Label htmlFor="password" className="sr-only">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register('password')}
          className={cn(inputStyles, errors.password && "border-destructive focus:ring-destructive")}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && <p className={errorTextStyles}>{errors.password.message}</p>}
      </div>
    </div>
  );
};

export default FormFields;
