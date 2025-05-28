import React from 'react';
import AuthCard from '../components/Auth/AuthCard';

/**
 * LoginPage serves as the main authentication page for the application.
 * It utilizes the AuthLayout structure, which centers the AuthCard component
 * on the screen against a themed background.
 */
const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      {/* 
        The AuthCard component encapsulates all login form elements and logic, 
        including header, input fields for username and password, submission button, 
        and an alternative sign-up link.
        It is styled and sized according to the project's design requirements.
      */}
      <AuthCard />
    </div>
  );
};

export default LoginPage;
