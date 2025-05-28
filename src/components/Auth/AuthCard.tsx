import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import FormHeader from './FormHeader';
import FormFields, { LoginFormInputs } from './FormFields';
import FormActions from './FormActions';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

interface AuthCardProps {
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ className }) => {
  const formMethods = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { handleSubmit, formState: { isSubmitting } } = formMethods;

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log('Login attempt with data:', data);
    // Simulate API call
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Login successful (simulated)');
        // formMethods.reset(); // Optionally reset form on success
        resolve();
      }, 1000);
    });
  };

  const handleSignUp = React.useCallback(() => {
    console.log('AuthCard: Navigate to sign up');
    // Navigation logic for sign up
  }, []);

  return (
    <Card className={cn(
      'w-[400px] p-8 bg-card text-card-foreground rounded-lg shadow-lg',
      className
    )}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormHeader title="Log in" />
          <FormFields />
          <FormActions 
            onSignUp={handleSignUp} 
            isSubmitting={isSubmitting} 
          />
        </form>
      </FormProvider>
    </Card>
  );
};

export default AuthCard;
